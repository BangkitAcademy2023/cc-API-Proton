// const express = require('express');
// const { PythonShell } = require('python-shell');

// const app = express();
// const port = 3000;

// // Definisikan endpoint untuk menjalankan model SARIMA
// app.get('/sarima', (req, res) => {
//   // Jalankan script Python yang menjalankan model SARIMA
//   PythonShell.run('sarima_script.py', null, function (err, result) {
//     if (err) throw err;
//     console.log('Hasil prediksi:', result);
//     res.send('Hasil prediksi: ' + result);
//   });
// });

// // Jalankan server
// app.listen(port, () => {
//   console.log(`Server berjalan di https://proton-387902.et.r.appspot.com`);
// });
