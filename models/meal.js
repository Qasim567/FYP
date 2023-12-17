// implemented in dummy-data.js    
class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		ingredients,
		steps,
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.ingredients = ingredients;
		this.steps = steps;
	}
}

export default Meal;
