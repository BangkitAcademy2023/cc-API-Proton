from flask import Flask, jsonify
import json
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
# from sklearn.metrics import mean_squared_error, mean_absolute_error
from statsmodels.tools.eval_measures import rmse
from statsmodels.tsa.stattools import adfuller
import statsmodels.api as sm
from pandas.tseries.offsets import DateOffset
import warnings

users_path=('./data/salesDaily.csv')

app = Flask(__name__)

# Mengabaikan peringatan secara global
warnings.filterwarnings("ignore")

@app.route('/predict', methods=['GET'])
def predict():
    # Import data
    df = pd.read_csv('salesDaily.csv', delimiter=',')
    df['Date'] = pd.to_datetime(df['Date'])
    df.set_index('Date', inplace=True)
    df.index.freq = 'D'

    model = sm.tsa.statespace.SARIMAX(df['Sales'], order=(1, 2, 1), seasonal_order=(1, 2, 1, 50), freq='D')
    results = model.fit()

    n_step = 30
    future_dates = [df.index[-1] + DateOffset(days=x) for x in range(0, n_step + 1)]
    future_datest_df = pd.DataFrame(index=future_dates[0:], columns=df.columns)
    future_df = pd.concat([df, future_datest_df])
    future_df['forecast'] = results.predict(start=len(df), end=len(df) + n_step + 1, dynamic=True).clip(lower=0)

    future_df['forecast'] = future_df['forecast']  # Cast the forecast column to integer

    forecast_sum_week1 = future_df['forecast'][len(df)+1:len(df)+8].astype(int).sum()
    forecast_sum_week2 = future_df['forecast'][len(df)+8:len(df)+15].astype(int).sum()
    forecast_sum_week3 = future_df['forecast'][len(df)+15:len(df)+22].astype(int).sum()
    forecast_sum_week4 = future_df['forecast'][len(df)+22:len(df)+28].astype(int).sum()

    data = {
        'message': 'Hasil prediksi',
        'data': {
            'w1': int(forecast_sum_week1),
            'w2': int(forecast_sum_week2),
            'w3': int(forecast_sum_week3),
            'w4': int(forecast_sum_week4)
        }
    }

    # Return the prediction as a response
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
