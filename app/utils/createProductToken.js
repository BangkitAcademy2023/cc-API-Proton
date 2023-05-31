const createproductToken = (product) => {
	return {
		name: product.name,
		productId: product._id,
		role: product.role,
		organizer: product.organizer,
	};
};

module.exports = { createProductToken };
