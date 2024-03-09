import Category from '../models/category';
import Meal from '../models/meal';
export const CATEGORIES = [
	new Category('c1', 'Cakes', 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNha2VzfGVufDB8fDB8fHww'),
	new Category('c2', 'Cookies', 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600'),
	new Category('c3', 'Pastries', 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'),
	new Category('c4', 'Sandwiches', 'https://img.freepik.com/premium-photo/two-sandwiches-made-slice-meat-cheese-tomatoes-toasted-bread-wooden-table_244366-394.jpg?size=626&ext=jpg&ga=GA1.1.261527264.1696249506&semt=ais'),
	new Category('c5', 'Donuts', 'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600'),
	new Category('c6', 'Bread and Buns', 'https://c4.wallpaperflare.com/wallpaper/681/930/507/bread-rye-bread-baked-goods-baguette-wallpaper-preview.jpg'),
	new Category('c7', 'Sweets', 'https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.webp?b=1&s=170667a&w=0&k=20&c=twNV7dVu6JUDKtnHBECoBwZxVq6gg9SlGJu1-O4h1u0='),
	new Category('c8', 'Pizza', 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg'),

];

export const MEALS = [
		new Meal(
			'ca1',
			['c1'],
			'Almond Cake',
			'affordable',
			'simple',
			'https://www.masala.tv/wp-content/uploads/2020/06/Honey-Almond-Cake.jpg',
			['Almond Flour','Sugar','Eggs','Butter','Vanilla Extract','Baking Powder','Salt','Almond Slices (for garnish)'],
			[
			  'Cream butter, sugar',
			  'Add eggs, vanilla, mix',
			  'Combine almond flour, baking powder, salt',
			  'Mix wet and dry ingredients',
			  'Pour into a greased pan',
			  'Garnish with almond slices',
			  'Bake until a toothpick comes out clean'
			]
		  ),

	new Meal(
		'ca2',
		[ 'c1' ],
		'Almond Choclate Cake',
		'affordable',
		'simple',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmE4ZFfu4F-sY8tSfyf7KxhdCBp99lmYhGQ&usqp=CAU',
		['Almond Flour','Sugar','Eggs','Butter','Cocoa Powder','Vanilla Extract','Baking Powder','Salt',
		'Almond Slices (for garnish)','Dark Chocolate (melted)']
		[
			  'Cream butter, sugar',
			  'Add eggs, vanilla, mix',
			  'Combine almond flour, cocao, baking powder, salt',
			  'Mix wet and dry ingredients',
			  'Melt dark chocolate, fold into batter',
			  'Pour into a greased pan',
			  'Garnish with almond slices',
			  'Bake until a toothpick comes out clean'
		]
	),

	new Meal(
		'ca3',
		[ 'c1' ],
		'Baked Cheese Cake',
		'affordable',
		'simple',
		'https://bakerbynature.com/wp-content/uploads/2018/05/extrathickandcreamycheesecake1234-1-of-1.jpg',
		['Cream Cheese','Sugar','Eggs','Sour Cream','Vanilla Extract','Flour,Butter (for crust)','Graham Crackers (for crust)'],
		[
			'Mix graham crackers, butter for crust',
			'Press into a greased pan',
			'Beat cream cheese, sugar until smooth',
			'Add eggs, vanilla, sour cream, mix',
			'Fold in flour until well combined',
			'Pour over crust in the pan',
			'Bake until the center is set'
		]
	),

	new Meal(
		'ca4',
		[ 'c1' ],
		'Battenberg Cake',
		'affordable',
		'simple',
		'https://food-images.files.bbci.co.uk/food/recipes/battenburg_cake_60878_16x9.jpg',
		['Butter','Sugar','Eggs','Flour','Almond Extract','Baking Powder','Apricot Jam','Marzipan'],
		[
			'Mix butter, sugar, eggs, flour, almond extract, baking powder',
			'Divide into two portions, one colored with pink',
			'Place in a checkerboard pattern in the pan',
			'Bake until a toothpick comes out clean',
			'Warm apricot jam, brush over the cake',
			'Roll out marzipan, wrap the cake',
			'Trim edges for a neat appearance'
		]
	),

	new Meal(
		'ca5',
		[ 'c1' ],
		'Black Currant Cake',
		'affordable',
		'simple',
		'https://assets.winni.in/product/primary/2014/6/31449.jpeg?dpr=1&w=500',
		['Butter','Sugar','Egg','Flour','Black Currant Jam','Baking Powder','Vanilla Extract','Milk'],
		[
			'Cream butter, sugar',
			'Add eggs, vanilla, mix',
			'Combine flour, baking powder',
			'Mix wet and dry ingredients',
			'Fold in black currant jam',
			'Pour into a greased pan',
			'Bake until a toothpick comes out clean'
		]
	),

	new Meal(
		'ca6',
		[ 'c1' ],
		'Black Forest Cake',
		'affordable',
		'simple',
		'https://www.shreemithai.com/cdn/shop/products/FShreemithai15-01-2021-407lowrescopy_2400x.jpg?v=1611572013',
		['Chocolate Cake Layers','Cherries (pitted)','Sugar','Whipped Cream','Chocolate Shavings'],
		[
			'Bake chocolate cake layers',
			'Simmer cherries with sugar',
			'Layer cake, cherries, and whipped cream',
			'Repeat for multiple layers',
			'Frost with whipped cream',
			'Garnish with chocolate shavings'
		]
	),

	new Meal(
		'ca7',
		[ 'c1' ],
		'Cadburys Flake Cake',
		'affordable',
		'simple',
		'https://louisekatherinecakesshop.co.uk/cdn/shop/products/image_e69ccbd3-1e96-4840-9b8b-fb346f278d22_929x.jpg?v=1592410225',
		['Butter','Sugar','Egg','Flour','Cocoa Powder','Baking Powder','Vanilla Extract','Milk',
			'Cadburys Flake Chocolate (for topping)'
		],
		[
			'Cream butter, sugar',
			'Add eggs, vanilla, mix',
			'Combine flour, cocoa, baking powder',
			'Mix wet and dry ingredients',
			'Add milk, mix until smooth',
			'Pour into a greased pan',
			'Bake until a toothpick comes out clean',
			'Crush Cadburys Flake, sprinkle on top'
		]
	),

	new Meal(
		'ca8',
		[ 'c1' ],
		'Cake Alaska',
		'affordable',
		'simple',
		'https://img.taste.com.au/AUxY1sBQ/taste/2018/08/pistachio-and-rose-bombe-alaska-ice-cream-cake-140372-2.jpg',
		['Sponge Cake','Ice Cream','Meringue','Egg Whites','Sugar','Vanilla Extract'],
		[
			'Place sponge cake as the base',
			'Add a layer of ice cream',
			'Cover with a layer of meringue',
			'Beat egg whites, sugar, vanilla',
			'Spread meringue to cover ice cream',
			'Bake until meringue is golden'
		]
	),
	
	new Meal(
		'ca9',
		[ 'c1' ],
		'Cheery Cake',
		'affordable',
		'simple',
		'https://tatyanaseverydayfood.com/wp-content/uploads/2017/07/Easy-Honey-Cherry-Cake-recipe-4.jpg',
		['Butter','Sugar','Eggs','Flour','Cherries (pitted and halved)','Baking Powder','Vanilla Extract','Milk'],
		[
			'Cream butter, sugar',
			'Add eggs, vanilla, mix',
			'Combine flour, baking powder',
			'Fold in halved cherries',
			'Pour into a greased pan',
			'Bake until a toothpick comes out clean'
		]
	),

	new Meal(
		'ca10',
		[ 'c1' ],
		'Cheese Cake',
		'affordable',
		'simple',
		'https://bakerbynature.com/wp-content/uploads/2018/05/extrathickandcreamycheesecake1234-1-of-1.jpg',
		['Cream Cheese','Sugar','Eggs','Sour Cream','Vanilla Extract','Flour','Graham Cracker Crust'],
		[
			'Mix cream cheese, sugar until smooth',
			'Add eggs, vanilla, sour cream, mix',
			'Fold in flour until well combined',
			'Pour into graham cracker crust',
			'Bake until the center is set'
		]
	),

	new Meal(
		'ca11',
		[ 'c1' ],
		'Choclate Chip Cake',
		'affordable',
		'simple',
		'https://www.theansweriscake.com/wp-content/uploads/2012/06/Chocolate-chip-cake-e1340631663589.jpg',
		['Butter','Sugar','Eggs','Flour','Baking Powder','Vanilla Extract','Chocolate Chips','Milk'],
		[
			'Cream butter, sugar',
			'Add eggs, vanilla, mix',
			'Combine flour, baking powder',
			'Mix in chocolate chips',
			'Add milk, mix well',
			'Pour into a greased pan',
			'Bake until a toothpick comes out clean'
		]
	),
	
	new Meal(
		'ca12',
		[ 'c1' ],
		'Choclate White Cream Cake',
		'affordable',
		'simple',
		'https://food-images.files.bbci.co.uk/food/recipes/celebration_chocolate_18175_16x9.jpg',
		['Cake mix', 'White chocolate', 'Cream', 'Sugar', 'Vanilla', 'Eggs', 'Oil'],
		[
			'Preheat oven to desired temperature',
			'Combine cake mix, eggs, oil, and water',
			'Pour batter into greased cake pans',
			'Bake until golden and springy to touch',
			'Melt white chocolate in microwave or double boiler',
			'Whip cream with sugar until stiff peaks form',
			'Frost cooled cakes with whipped cream'
		]
	),
	
	new Meal(
		'ca13',
		[ 'c1' ],
		'Choclate Cake',
		'affordable',
		'simple',
		'https://food-images.files.bbci.co.uk/food/recipes/easy_chocolate_cake_31070_16x9.jpg',
		[
			'Flour', 'Cocoa powder', 'Sugar', 'Baking powder', 'Salt', 'Eggs', 'Milk', 'Vegetable oil', 'Vanilla extract'],
		[
			'Preheat oven to desired temperature',
			'Mix dry ingredients in a bowl',
			'Beat eggs, milk, oil, and vanilla',
			'Combine wet and dry ingredients',
			'Pour batter into greased cake pans',
			'Bake until a toothpick comes out clean',
			'Cool before frosting and serving'
		]
	),

	new Meal(
		'ca14',
		[ 'c1' ],
		'Choclate Caramel Cake',
		'affordable',
		'simple',
		'https://recipes.net/wp-content/uploads/2020/03/Salted-Caramel-Chocolate-Layer-Cake.jpg',
		['Flour, Cocoa powder', 'Sugar', 'Baking powder', 'Salt', 'Eggs', 'Milk', 'Vegetable oil', 'Vanilla extract', 'Caramel sauce'],
		[
			'Preheat oven to desired temperature',
			'Combine dry ingredients in a bowl',
			'Beat Eggs, Milk, Oil, and Vanilla',
			'Mix wet and dry ingredients together',
			'Pour batter into greased cake pans',
			'Bake until a toothpick comes out clean',
			'Cool, then spread caramel sauce over cake'
		]
	),

	new Meal(
		'ca15',
		[ 'c1' ],
		'Choclate Mousse Cake',
		'affordable',
		'simple',
		'https://vjcooks.com/wp-content/uploads/2021/07/Vjcooks_chocmoussecake13.jpg',
		['Chocolate, Eggs', 'Sugar', 'Butter', 'Cream', 'Flour', 'Baking powder', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Melt Chocolate and Butter',
			'Beat Eggs and Sugar until fluffy',
			'Fold in melted Chocolate mixture',
			'Mix Flour, Baking powder, and Salt',
			'Fold dry ingredients into wet mixture',
			'Pour batter into greased cake pan',
		]
	),

	new Meal(
		'ca16',
		[ 'c1' ],
		'Cup Cake',
		'affordable',
		'simple',
		'https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Add Eggs one at a time, beating well',
			'Mix in Vanilla extract',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into lined cupcake trays',
		]
	),

	new Meal(
		'ca17',
		[ 'c1' ],
		'Fruit Cake',
		'affordable',
		'simple',
		'https://hips.hearstapps.com/hmg-prod/images/fruit-cake-recipe-1630084221.jpg?crop=0.675xw:1.00xh;0.137xw,0&resize=1200:*',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Mixed fruit', 'Nuts', 'Baking powder', 'Cinnamon'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Fold in Flour and Baking powder',
			'Mix in Mixed fruit, Nuts, and Cinnamon',
			'Pour batter into greased cake pan',
			'Bake until a skewer comes out clean'
		]
	),
	
	new Meal(
		'ca19',
		[ 'c1' ],
		'Icecream Cake',
		'affordable',
		'simple',
		'https://d2sbytayo4rkgk.cloudfront.net/eyJidWNrZXQiOiJwcm9kLWZlcmd1c29ucGxhcnJlLWFzc2V0cyIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9mL2wvZmxvdXJsZXNzLWljZS1jcmVhbS1iaXJ0aGRheS1jYWtlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
		['Ice cream', 'Cake layers', 'Chocolate sauce', 'Whipped cream', 'Sprinkles', 'Cherries', 'Cookies'],
		[
			'Place one cake layer in the bottom of a springform pan',
			'Spread softened ice cream over the cake layer',
			'Drizzle with chocolate sauce',
			'Add another cake layer on top',
			'Freeze until firm',
			'Frost with whipped cream',
			'Decorate with sprinkles and cherries'
		]
	),

	new Meal(
		'ca20',
		[ 'c1' ],
		'Layer Cake',
		'affordable',
		'simple',
		'https://assets.bonappetit.com/photos/57acf4a41b33404414975396/1:1/w_4096,h_4096,c_limit/Staged_Cakes_Birthday_High_2.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Baking powder', 'Vanilla extract', 'Salt', 'Frosting'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into greased cake pans',
			'Bake until golden and a toothpick comes out clean'
		]
	),

	new Meal(
		'ca21',
		[ 'c1' ],
		'Lemon Cake',
		'affordable',
		'simple',
		'https://preppykitchen.com/wp-content/uploads/2022/06/Lemon-Cake-Recipe.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Lemon juice', 'Lemon zest', 'Baking powder', 'Salt', 'Milk'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Lemon juice and zest',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into greased cake pans',
		]
	),

	new Meal(
		'ca22',
		[ 'c1' ],
		'Marble Cake',
		'affordable',
		'simple',
		'https://schoolnightvegan.com/wp-content/uploads/2022/10/vegan-marble-cake-23.jpg',
		[ 'Flour', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Cocoa powder', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Alternate adding Flour mixture and Milk to the batter',
			'Divide batter in half, mix cocoa powder into one half',
			'Pour batters into greased cake pans, swirl with a knife'
		]
	),

	new Meal(
		'ca23',
		[ 'c1' ],
		'PineApple Cake',
		'affordable',
		'simple',
		'https://newtownbakers.pk/wp-content/uploads/2020/12/1p_pineapple-min.jpg',
		['Flour', 'Sugar', 'Eggs',' Butter', 'Pineapple', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Fold in diced Pineapple',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Milk to the batter'
		]
	),

	new Meal(
		'ca24',
		[ 'c1' ],
		'Pistachio Cake',
		'affordable',
		'simple',
		'https://sugarspunrun.com/wp-content/uploads/2023/08/Pistachio-Cake-1-of-1.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Pistachios', 'Baking powder', 'Vanilla extract', 'Milk'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Fold in chopped Pistachios',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Milk to the batter'
		]
	),

	new Meal(
		'ca25',
		[ 'c1' ],
		'Plain Cake',
		'affordable',
		'simple',
		'https://img.taste.com.au/BYEcPquu/taste/2010/01/easy-vanilla-butter-cake_1980x1320-118393-1.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into greased cake pans'
		]
	),

	new Meal(
		'ca26',
		[ 'c1' ],
		'Stawbery Cake',
		'affordable',
		'simple',
		'https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card-500x500.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Strawberries', 'Baking powder', 'Vanilla extract', 'Milk'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Puree Strawberries and add to batter',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Milk to the batter'
		]
	),

	new Meal(
		'ca27',
		[ 'c1' ],
		'Vanilla Cake',
		'affordable',
		'simple',
		'https://chatelaine.com/wp-content/uploads/2023/09/vanilla-yellow-layer-cake-recipe-960.jpg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla extract', 'Baking powder', 'Milk', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into greased cake pans'
		]
	),

	new Meal(
		'ca28',
		[ 'c1' ],
		'Whipped Choclate Cake',
		'affordable',
		'simple',
		'https://www.marthastewart.com/thmb/qYuuiq6bl00ge9kpqRHP5OSmANA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/med104694_0509_choc_cake_vert-b112e79dc6c04cc38439f9fc020ea4c3.jpgitokrk_3uYdK',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Cocoa powder', 'Baking powder', 'Vanilla extract', 'Milk', 'Whipped cream'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Cocoa powder and Vanilla extract',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Milk to the batter',
			'Fold in whipped cream until just combined'
		]
	),

	new Meal(
		'ca29',
		[ 'c1' ],
		'White Angle Cream Cake',
		'affordable',
		'simple',
		'https://img.taste.com.au/F32qj9kj/w1200-h630-cfill/taste/2016/11/white-christmas-angel-cake-with-rose-and-prosecco-syrup-106299-1.jpeg',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Cream', 'Vanilla extract', 'Baking powder', 'Salt'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until fluffy',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Combine Flour, Baking powder, and Salt',
			'Alternate adding Flour mixture and Cream to the batter',
			'Pour batter into greased cake pans'
		]
	),

	new Meal(
		'ca30',
		[ 'c1' ],
		'Apple Pie Cake',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-55.png',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Apples', 'Cinnamon', 'Baking powder', 'Vanilla extract', 'Milk'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract and Cinnamon',
			'Peel, core, and slice Apples',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Milk to the batter',
		]
	),

	new Meal(
		'ca32',
		[ 'c1' ],
		'Caramel Crunch Cake',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-5.png',
		[ 'Flour', 'Sugar', 'Eggs', 'Butter', 'Caramel sauce', 'Crunchy cereal', 'Baking powder', 'Vanilla extract', 'Milk'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Milk to the batter',
			'Fold in Caramel sauce and Crunchy cereal'
		]
	),

	new Meal(
		'ca33',
		[ 'c1' ],
		'Coffee Mousse Cake',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-7.png',
		[ 'Flour', 'Sugar', 'Eggs', 'Butter', 'Coffee powder', 'Heavy cream', 'Gelatin', 'Vanilla extract', 'Chocolate shavings'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Dissolve Coffee powder in hot water, let cool',
			'Mix in Vanilla extract',
			'Combine Flour and Baking powder',
			'Alternate adding Flour mixture and Coffee to the batter',
			'Bake until a toothpick comes out clean',
			'Dissolve Gelatin in water, let cool slightly',
			'Whip Heavy cream until soft peaks form',
			'Fold in Gelatin mixture,',
			'Layer cake with Coffee mousse',
			'Garnish with Chocolate shavings before serving'
		]
	),

	new Meal(
		'ca34',
		[ 'c1' ],
		'Rafello Cake',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/untitled-13.png',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Almond flour', 'Coconut flakes', 'Baking powder', 'Vanilla extract', 'Milk', 'White chocolate', 'Cream cheese', 'Powdered sugar', 'Rafello chocolates'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract',
			'Combine Flour, Almond flour, Baking powder, and Coconut flakes',
			'Alternate adding Flour mixture and Milk to the batter',
			'Pour batter into greased cake pans',
			'Bake until golden and a toothpick comes out clean',
			'Let cool completely before frosting',
			'Melt White chocolate in a double boiler',
			'Beat Cream cheese until smooth, then mix in Powdered sugar',
			'Fold in melted White chocolate',
			'Spread frosting between cake layers and on top',
			'Garnish with Rafello chocolates before serving'
		]
	),

	new Meal(
		'ca36',
		[ 'c1' ],
		'Red Velvet Cake',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/untitled-18.png',
		[ 'Flour', 'Sugar', 'Eggs', 'Butter', 'Buttermilk', 'Cocoa powder', 'Red food coloring', 'Vanilla extract', 'Baking soda', 'Vinegar', 'Salt', 'Cream cheese', 'Powdered sugar', 'Vanilla extract'],
		[
			'Preheat oven to desired temperature',
			'Cream Butter and Sugar until light',
			'Beat in Eggs one at a time',
			'Mix in Vanilla extract and Red food coloring',
			'Combine Flour, Cocoa powder, and Salt',
			'Alternate adding Flour mixture and Buttermilk to the batter',
			'Dissolve Baking soda in Vinegar, then fold into batter',
			'Pour batter into greased cake pans',
			'Bake until a toothpick comes out clean',
			'Let cool completely before frosting',
			'Beat Cream cheese until smooth',
			'Mix in Powdered sugar and Vanilla extract until creamy',
			'Spread frosting between cake layers and on top',
			'Refrigerate before serving for best results'
		]
	),

	new Meal(
		'ca37',
		[ 'c1' ],
		'Hazelnut Cake',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/untitled-9.png',
		['Hazelnut flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla extract', 'Baking powder', 'Salt', 'Milk'],
		[
			'Preheat oven', 
			'Mix dry ingredients', 
			'Cream butter and sugar', 
			'Add eggs and vanilla', 
			'Alternate dry mixture and milk', 
			'Pour batter into pans', 
			'Bake until done'
		]
	),

	new Meal(
		'ca38',
		[ 'c1' ],
		'Lemon Tart Almomd Cake',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/untitled-31.jpg',
		['Almond flour', 'Sugar', 'Eggs', 'Butter', 'Lemon zest', 'Lemon juice', 'Vanilla extract', 'Baking powder', 'Salt'],
		[
			'Preheat oven', 
			'Mix almond flour, sugar, baking powder', 
			'Cream butter and sugar', 
			'Beat in eggs, lemon zest, vanilla', 
			'Fold in dry ingredients and lemon juice', 
			'Pour batter into greased cake pans', 
			'Bake until golden and firm'
		]
	),

	new Meal(
		'ca39',
		[ 'c1' ],
		'Tiramisu Coffee Cake',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-55.pnghttps://meer.com.pk/wp-content/uploads/2023/11/untitled-122-scaled-1-585x780.jpg',
		[ 'Flour', 'Sugar', 'Eggs', 'Butter', 'Coffee powder', 'Mascarpone cheese', 'Vanilla extract', 'Baking powder', 'Salt', 'Milk', 'Cocoa powder', 'Espresso', 'Rum (optional)'],
		[
			'Preheat oven', 
			'Mix flour, baking powder, and salt', 
			'Cream butter and sugar', 
			'Beat in eggs, vanilla, and coffee powder', 
			'Alternate adding dry mixture and milk', 
			'Pour batter into greased cake pans', 
			'Bake until golden and springy', 
			'Mix mascarpone with cocoa powder and espresso', 
			'Spread mixture between cake layers', 
			'Optional: drizzle rum over layers', 'Chill before serving'
		]
	),

	new Meal(
		'ca40',
		[ 'c1' ],
		'Walnut Pie Cake',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/untitled-57.png',
		['Flour', 'Sugar', 'Eggs', 'Butter', 'Walnuts', 'Vanilla extract', 'Baking powder', 'Salt', 'Milk'],
		[
			'Preheat oven', 
			'Mix flour, baking powder, and salt', 
			'Cream butter and sugar', 
			'Beat in eggs and vanilla', 
			'Fold in chopped walnuts', 
			'Alternate adding dry mixture and milk', 
			'Pour batter into greased cake pans', 
			'Bake until golden and firm'
		]
	),

	new Meal(
		'co1',
		[ 'c2' ],
		'Akhrot Cookie',
		'affordable',
		'simple',
		'https://www.chelsea.co.nz/files/cache/75b8c16310bced214f6ee2fb57f5f6a0_f2317.jpg.webp',
		['Walnuts','All-Purpose Flour','Butter','Sugar','Vanilla Extract'],
		[
			'Grind walnuts into a coarse powder',
			'Cream butter, sugar, and vanilla',
			'Mix in ground walnuts and flour',
			'Form into cookie dough',
			'Chill dough, then shape into cookies',
			'Bake until golden brown'
		]
	),

	new Meal(
		'co2',
		[ 'c2' ],
		'Almond Cookie',
		'affordable',
		'simple',
		'https://earlybrawd.com/wp-content/uploads/2019/11/5-ingredient-almond-cookies-gluten-free_featured.jpg',
		['Almond Flour','Butter','Sugar','Egg','Vanilla Extract','Baking Powder','Salt'],
		[
			'Cream butter, sugar',
			'Add egg, vanilla, mix',
			'Combine almond flour, baking powder, salt',
			'Mix wet and dry ingredients',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co3',
		[ 'c2' ],
		'Besan Khatai',
		'affordable',
		'simple',
		'https://blessmyfoodbypayal.com/wp-content/uploads/2021/07/1626282260315.jpg',
		['Gram Flour (Besan)','Ghee','Powdered Sugar','Cardamom Powder'],
		[
			'Mix besan, ghee, powdered sugar, cardamom',
			'Shape into small round cookies',
			'Bake until the edges turn golden',
			'Allow them to cool',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'co4',
		[ 'c2' ],
		'Black Currant Cookie',
		'affordable',
		'simple',
		'https://img.delicious.com.au/98zPgqSX/del/2015/10/nutmeg-and-currant-easter-biscuits-13636-2.jpg',
		['Butter','Sugar','Egg','Flour','Black Currants','Vanilla Extract','Baking Powder','Salt'],
		[
			'Cream butter, sugar',
			'Add egg, vanilla, mix',
			'Combine flour, baking powder, salt',
			'Mix wet and dry ingredients',
			'Fold in black currants',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co5',
		[ 'c2' ],
		'Check Cookie',
		'affordable',
		'simple',
		'https://cookiesandcups.com/wp-content/uploads/2019/11/checkerboardcookies-9.jpg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Vanilla Extract','Cocoa Powder','Salt','White Chocolate Chips'],
		[
			'Cream butter, sugar',
			'Add egg, vanilla, mix',
			'Combine flour, baking powder, salt',
			'Divide dough',
			'Add cocoa powder to one half',
			'Mix white chocolate chips into both halves',
			'Form checkerboard-patterned cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co6',
		[ 'c2' ],
		'Cheese Cookie',
		'affordable',
		'simple',
		'https://marginmakingmom.com/wp-content/uploads/2021/11/Cream-Cheese-Cookies-FEATURE.jpg',
		['Butter','Cream Cheese','Sugar','Egg','Vanilla Extract','Flour','Baking Powder','Salt'],
		[
			'Cream butter, cream cheese, sugar',
			'Add egg, vanilla, mix',
			'Combine flour, baking powder, salt',
			'Mix wet and dry ingredients',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co7',
		[ 'c2' ],
		'Choclate Cookie',
		'affordable',
		'simple',
		'https://cloudykitchen.com/wp-content/uploads/2022/12/chocolate-cookies-on-pan.jpg',
		['Butter','Sugar','Egg','Flour','Cocoa Powder','Baking Powder','Salt','Chocolate Chips'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, cocoa, baking powder, salt',
			'Mix in chocolate chips',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co8',
		[ 'c2' ],
		'Choclate Chip Cookie',
		'affordable',
		'simple',
		'https://lovingitvegan.com/wp-content/uploads/2021/10/Vegan-Chocolate-Cookies-Square.jpg',
		['Butter','Brown Sugar','White Sugar','Egg','Flour','Cocoa Powder','Baking Soda','Salt','Chocolate Chips','Vanilla Extract'],
		[
			'Cream butter, sugar',
			'Add egg, vanilla, mix',
			'Combine flour, cocoa, baking soda, salt',
			'Mix in chocolate chips',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co9',
		[ 'c2' ],
		'Choclate Stick',
		'affordable',
		'simple',
		'https://bakewithshivesh.com/wp-content/uploads/2021/06/IMG_9568-scaled.jpg',
		['Butter','Sugar','Egg','Flour','Cocoa Powder','Baking Powder','Salt','Chocolate (melted)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, cocoa, baking powder, salt',
			'Mix in melted chocolate',
			'Form into sticks',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co10',
		[ 'c2' ],
		'Coconut Cookie',
		'affordable',
		'simple',
		'https://www.cookingwithnanaling.com/wp-content/uploads/2023/08/coconut-biscuits-recipe.jpg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Shredded Coconut'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in Shredded Coconut',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co11',
		[ 'c2' ],
		'Dil Jaam Cookie',
		'affordable',
		'simple',
		'https://rukminim2.flixcart.com/image/850/1000/kmax8y80/cookie-biscuit/x/t/8/900-pack-of-3-cookies-jam-cookies-honey-almond-cookies-dil-original-imagf8hkfeh8xztp.jpeg?q=20',
		['All-Purpose Flour','Sugar','Egg','Flour','Baking Powder','Jam for fill hearts','Butter','Vanilla essence'],
		[
			'Prepare the cookie dough',
			'Transfer cookie dough balls to the baking sheet & add jam',
			'Bake the cookies for 20 minutes until crisp'
		]
	),

	new Meal(
		'co12',
		[ 'c2' ],
		'Fruit Cookie',
		'affordable',
		'simple',
		'https://www.onegreenplanet.org/wp-content/uploads/2017/08/img_9835.jpg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Dried Fruits'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in chopped dried fruit',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co13',
		[ 'c2' ],
		'Choclate Fudge Cookie',
		'affordable',
		'simple',
		'https://lonumedhu.com/sites/default/files/ChocolateBiscuitFudge1.jpg',
		['Butter','Sugar','Egg','Flour','Cocoa Powder','Baking Powder','Salt','Choclate Chips','Walnuts (chopped)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, cocoa, baking powder, salt',
			'Mix in choclate chips, chopped walnuts',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co14',
		[ 'c2' ],
		'Ginger Cookie',
		'affordable',
		'simple',
		'https://mymorningmocha.com/wp-content/uploads/2022/11/Ginger-biscuit-recipe.jpg',
		['Butter','Sugar','Egg','Flour','Baking Soda','Salt','Ground Ginger','Ground Cinnamon'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking soda, salt',
			'Mix in ground ginger, ground cinnamon',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co15',
		[ 'c2' ],
		'Nan Khatai',
		'affordable',
		'simple',
		'https://cdn3.foodviva.com/static-content/food-images/diwali-recipes/nan-khatai/nan-khatai.jpg',
		['All-Purpose Flour','Ghee','Powdered Sugar','Cardamom Powder','Baking Powder','Almonds (chopped)'],
		[
			'Cream ghee, powdered sugar',
			'Add flour,cardamom,baking powder,chopped almonds',
			'Mix in a soft dough',
			'Shape into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co16',
		[ 'c2' ],
		'Peanut Cookie',
		'affordable',
		'simple',
		'https://www.rockrecipes.com/wp-content/uploads/2012/10/Peanut-Butter-Crunch-Cookies-photo-of-stack-of-cookies-on-a-green-placemat.jpg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Peanuts (chopped)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in chopped peanuts',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co17',
		[ 'c2' ],
		'Pista Cookie',
		'affordable',
		'simple',
		'https://tastedrecipes.com/wp-content/uploads/2021/03/Kaju-Pista-Cookies-6.jpgg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Pistachios (chopped)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in chopped pistachios',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co18',
		[ 'c2' ],
		'Stawbery Cookie',
		'affordable',
		'simple',
		'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Fstraw-biscuits-hero-2000.jpg',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Dried Strawberries (chopped)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in chopped dried stawberries',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co19',
		[ 'c2' ],
		'Zeera Cookie',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/62403305.cms?width=800&height=800&imgsize=566439',
		['Butter','Sugar','Egg','Flour','Baking Powder','Salt','Cumin Seeds (Zeera)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in  cumin seeds (zeera)',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co20',
		[ 'c2' ],
		'Almomd Macroni',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/15-1.png',
		['Macaroni pasta','Almonds','Butter','Flour','Milk','Salt and pepper','Grated cheese (optional)','Parsley (for garnish)'],
		[
			'Cream butter, sugar',
			'Add egg, mix',
			'Combine flour, baking powder, salt',
			'Mix in  cumin seeds (zeera)',
			'Form into cookies',
			'Bake until edges golden'
		]
	),

	new Meal(
		'co21',
		[ 'c2' ],
		'Badam Khatai',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/20-1.png',
		['Almond flour', 'Sugar', 'Ghee (Clarified butter)', 'Cardamom powder', 'Baking powder', 'Saffron strands (optional)', 'Milk (optional)'],
		[
			'Preheat oven to desired temperature',
			'Mix almond flour, sugar, cardamom powder, and baking powder in a bowl',
			'Add ghee to the mixture and knead into a smooth dough',
			'If the dough is too dry, add a little milk to bring it together (optional)',
			'Divide the dough into small portions and shape them into round balls or flatten them slightly into discs',
			'Place the dough balls on a baking sheet lined with parchment paper',
			'Press a saffron strand onto the top of each khatai (optional)',
			'Bake in the preheated oven until the khatais are golden brown on the edges',
			'Allow them to cool completely before serving'
		]
	),

	new Meal(
		'co22',
		[ 'c2' ],
		'Bunty Cookie',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-26.png',
		['Flour', 'Sugar', 'Butter', 'Almonds', 'Pistachios', 'Cardamom powder', 'Baking powder', 'Rose water'],
		[
			'Preheat oven to desired temperature',
			'Cream butter and sugar until light and fluffy',
			'Chop almonds and pistachios finely',
			'Mix chopped nuts, cardamom powder, and baking powder with flour',
			'Gradually add dry ingredients to the creamed butter and sugar mixture',
			'Add rose water and mix until a dough forms',
			'Roll dough into small balls and place them on a baking sheet lined with parchment paper',
			'Flatten each ball slightly with the back of a spoon',
			'Bake in the preheated oven until the edges are lightly golden',
			'Allow bunties to cool on a wire rack before serving'
		]
	),

	new Meal(
		'co23',
		[ 'c2' ],
		'Cake Rusk',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/19-1.png',
		[ 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven',
			'Cream butter and sugar until light and fluffy',
			'Beat in eggs one at a time, then mix in vanilla extract',
			'Combine flour, baking powder, and salt',
			'Gradually add dry ingredients to the butter mixture',
			'Mix until a dough forms',
			'Form dough into a log shape and place on a baking sheet',
			'Bake until golden brown and firm',
			'Slice the baked log into thin slices',
			'Place the slices back on the baking sheet and bake again until crispy',
			'Allow to cool completely before serving'
		]
	),

	new Meal(
		'co24',
		[ 'c2' ],
		'Chana Cookie',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-24.png',
		['Chickpea flour (Besan)', 'Sugar', 'Ghee (Clarified butter)', 'Cardamom powder', 'Baking powder', 'Salt'],
		[
			'Preheat oven',
			'Mix chickpea flour, sugar, cardamom powder, baking powder, and salt',
			'Add melted ghee to the dry ingredients',
			'Knead until a dough forms',
			'Roll out the dough and cut into desired shapes',
			'Place on a baking sheet lined with parchment paper',
			'Bake until the edges are golden brown',
			'Allow to cool before serving'
		]
	),

	new Meal(
		'co25',
		[ 'c2' ],
		'Cold Coffee Cookie',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/28.png',
		['Flour', 'Butter', 'Sugar', 'Instant coffee powder', 'Milk', 'Baking powder', 'Salt'],
		[
			'Preheat oven',
			'Dissolve instant coffee powder in milk',
			'Cream butter and sugar until light and fluffy',
			'Mix in the coffee-milk mixture',
			'Combine flour, baking powder, and salt',
			'Gradually add dry ingredients to the butter mixture',
			'Mix until well combined to form a dough',
			'Drop spoonfuls of dough onto baking sheets',
			'Bake until cookies are set and edges are lightly golden',
			'Allow to cool completely before serving'
		]
	),

	new Meal(
		'co26',
		[ 'c2' ],
		'Cold Pista',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/11-1.png',
		['Flour', 'Butter', 'Sugar', 'Pistachios', 'Cardamom powder', 'Baking powder', 'Salt'],
		[
			'Preheat oven',
			'Grind pistachios into a coarse powder',
			'Cream butter and sugar until fluffy',
			'Mix in ground pistachios and cardamom powder',
			'Combine flour, baking powder, and salt',
			'Gradually add dry ingredients to the butter mixture',
			'Form dough into small balls and flatten slightly',
			'Place on a baking sheet',
			'Bake until cookies are set and edges are golden brown',
			'Allow to cool completely before serving'
		]
	),

	new Meal(
		'co27',
		[ 'c2' ],
		'English Cookie',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/24.png',
		[ 'Flour', 'Butter', 'Sugar', 'Eggs', 'Baking powder', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven',
			'Cream butter and sugar until light',
			'Beat in eggs and vanilla extract',
			'Mix flour, baking powder, and salt',
			'Combine wet and dry ingredients',
			'Drop spoonfuls of dough onto baking sheets',
			'Bake until golden brown',
			'Let cool before serving'
		]
	),

	new Meal(
		'co28',
		[ 'c2' ],
		'Kalwanji Cookie',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/16-1.png',
		[ 'Flour', 'Butter', 'Sugar', 'Kalwanji (Nigella seeds)', 'Baking powder', 'Salt', 'Milk'],
		[
			'Preheat oven',
			'Mix flour, sugar, kalwanji, baking powder, and salt',
			'Cut in butter until crumbly',
			'Gradually add milk to form a dough',
			'Roll out dough and cut into desired shapes',
			'Place on a baking sheet',
			'Bake until golden brown',
			'Let cool before serving'
		]
	),

	new Meal(
		'co29',
		[ 'c2' ],
		'Til Khatai',
		'affordable',
		'simple',
		'https://meer.com.pk/wp-content/uploads/2023/11/23.png',
		['Flour', 'Sesame seeds', 'Sugar', 'Ghee', 'Cardamom powder', 'Baking soda', 'Salt'],
		[
			'Preheat oven', 'Mix flour, sesame seeds, sugar, cardamom powder, baking soda, and salt', 
			'Add melted ghee to form a dough', 
			'Shape dough into small balls', 
			'Press gently to flatten', 
			'Bake until golden brown', 
			'Let cool before serving'
		]
	),

	new Meal(
		'p1',
		[ 'c3' ],
		'Almond Brownie',
		'affordable',
		'simple',
		'https://th.bing.com/th/id/R.0c75af6939184b5e8f62aae3f9de2226?rik=7i0Tt9oGqJF0Ag&pid=ImgRaw&r=0',
		['Chocolate','Butter','Sugar','Eggs','Almond Flour','Cocoa Powder','Vanilla Extract','Almonds (chopped)'],
		[
			'Melt chocolate and butter',
			'Whisk in sugar, eggs, vanilla',
			'Fold in almond flour, cocoa',
			'Add chopped almonds',
			'Pour into a baking pan',
			'Bake until set',
			'Cool before slicing',
		]
	),

	new Meal(
		'p2',
		[ 'c3' ],
		'Black Forest Pastry',
		'affordable',
		'simple',
		'https://shreeramsweets.com/wp-content/uploads/2021/08/extravagant-blackforest-past0159blac-A_0.jpg',
		['Chocolate','Cherries','Whipped Cream','Sugar','Vanilla Extract','Chocolate Shavings'],
		[
			'Bake chocolate cake',
			'Mix cherries with sugar',
			'Whip cream with vanilla',
			'Layer cake, cherries, cream',
			'Repeat layers',
			'Garnish with chocolate shavings',
			'Chill before serving',
		]
	),

	new Meal(
		'p3',
		[ 'c3' ],
		'Blueberry Cheese Pastry',
		'affordable',
		'simple',
		'https://www.elloras.in/cdn/shop/products/Blueberry-Cheesecake_1_693x.jpg?v=1659334029%201x,//www.elloras.in/cdn/shop/products/Blueberry-Cheesecake_1_693x@2x.jpg?v=1659334029%202x',
		['Puff Pastry','Blueberries','Cream Cheese','Sugar','Lemon Zest','Egg (for egg wash)','Powdered Sugar (for dusting)'],
		[
			'Roll out puff pastry',
			'Mix cream cheese, sugar, lemon zest',
			'Spread on pastry',
			'Add blueberries on top',
			'Fold and seal edges',
			'Brush with egg wash',
			'Bake until golden brown',
			'Dust with powdered sugar',
		]
	),

	new Meal(
		'p4',
		[ 'c3' ],
		'Choclate Pastry',
		'affordable',
		'simple',
		'https://www.thecococompany.com/cdn/shop/products/Chocolate-Truffle-Pastries_1024x1024.jpg?v=1577958105',
		['Puff Pastry','Chocolate Chips','Butter','Sugar','Cocoa Powder','Egg (for egg wash)','Powdered Sugar (for dusting)'],
		[
			'Roll out puff pastry',
			'Melt chocolate chips, butter, sugar',
			'Mix in cocoa powder',
			'Spread on pastry',
			'Fold and seal edges',
			'Brush with egg wash',
			'Bake until golden brown',
			'Dust with powdered sugar'
		]
	),
	
	new Meal(
		'p5',
		[ 'c3' ],
		'Choclate Swiss Roll',
		'affordable',
		'simple',
		'https://assets.epicurious.com/photos/62cda7af268a310d85053fea/1:1/w_1600,c_limit/SwissRoll_RECIPE_062922_36484.jpg',
		['Eggs','Sugar','Flour','Cocoa Powder','Whipped Cream'],
		[
			'Beat eggs, sugar until fluffy',
			'Fold in flour, cocoa powder',
			'Bake in a thin layer',
			'Roll with whipped cream',
			'Chill before slicing',
		]
	),

	new Meal(
		'p6',
		[ 'c3' ],
		'Cream Roll',
		'affordable',
		'simple',
		'https://i.ytimg.com/vi/dod-pBVh27g/maxresdefault.jpg',
		['Puff Pastry','Whipped Cream','Powdered Sugar'],
		[
			'Roll out puff pastry',
			'Spread whipped cream',
			'Roll and slice',
			'Dust with powdered sugar',
		]
	),

	new Meal(
		'p7',
		[ 'c3' ],
		'Lemon Swiss Roll',
		'affordable',
		'simple',
		'https://i0.wp.com/paddock2pixel.com/wp-content/uploads/2020/01/Swiss-Roll.jpg?fit=846%2C1200&ssl=1',
		['Eggs','Sugar','Flour','Lemon Zest','Whipped Cream'],
		[
			'Beat eggs, sugar until fluffy',
			'Fold in flour, lemon zest',
			'Bake in a thin layer',
			'Roll with whipped cream',
			'Chill before slicing',
		]
	),

	new Meal(
		'p8',
		[ 'c3' ],
		'Pineapple Pastry',
		'affordable',
		'simple',
		'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/02/Eggless-Pineapple-pastry-recipe-01-1.jpg',
		['Puff Pastry','Pineapple Filling','Whipped Cream','Powdered Sugar'],
		[
			'Roll out puff pastry',
			'Spread pineapple filling',
			'Add a layer of whipped cream',
			'Roll and slice',
			'Dust with powdered sugar',
		]
	),

	new Meal(
		'p9',
		[ 'c3' ],
		'Stawbery Pastry',
		'affordable',
		'simple',
		'https://shreeramsweets.com/wp-content/uploads/2021/08/thumb_500_500_strawberry-pastry24Wu.jpg',
		['Puff Pastry','Strawberry Jam','Fresh Strawberries','Whipped Cream','Powdered Sugar'],
		[
			'Roll out puff pastry',
			'Spread strawberry jam',
			'Add fresh strawberries and whipped cream',
			'Roll and slice',
			'Dust with powdered sugar',
		]
	),

	new Meal(
		'p10',
		[ 'c3' ],
		'Caramel Fudge Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-42.png',
		[ 'Puff pastry sheets', 'Caramel sauce', 'Chocolate chips or chunks', 'Chopped nuts (optional)', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'Unroll pastry on floured surface',
			'Cut into squares or rectangles',
			'Place caramel, chocolate, nuts on each piece',
			'Fold into triangles or rectangles',
			'Press edges to seal',
			'Place on lined baking sheet',
			'Optional: Brush with egg wash',
			'Bake until golden brown',
			'Cool before serving'
		]
	),

	new Meal(
		'p11',
		[ 'c3' ],
		'Choclate Chip Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-40.png',
		['Puff pastry sheets', 'Chocolate chips', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'Unroll pastry on floured surface',
			'Sprinkle chocolate chips evenly over pastry',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p12',
		[ 'c3' ],
		'Double Fudge Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-37.png',
		['Puff pastry sheets', 'Cocoa powder', 'Chocolate chips', 'Brown sugar', 'Butter', 'Vanilla extract', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'In a saucepan, melt butter over low heat',
			'Add cocoa powder, brown sugar, and vanilla extract',
			'Stir until smooth and well combined',
			'Remove from heat and let cool slightly',
			'Unroll pastry on floured surface',
			'Spread the chocolate mixture evenly over the pastry',
			'Sprinkle chocolate chips over the mixture',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p13',
		[ 'c3' ],
		'Lemon Tart Dry Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-182.png',
		['Flour', 'Butter', 'Powdered sugar', 'Lemon zest', 'Salt', 'Egg yolk'],
		[
			'Preheat oven to specified temperature',
			'Combine flour, powdered sugar, lemon zest, and salt in a bowl',
			'Cut in butter until mixture resembles coarse crumbs',
			'Mix in egg yolk until dough comes together',
			'Press dough evenly into a tart pan',
			'Poke holes in the bottom of the dough with a fork',
			'Bake until lightly golden brown and crisp',
			'Cool completely before filling'
		]
	),

	new Meal(
		'p14',
		[ 'c3' ],
		'Raffaello Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-38.png',
		[ 'Puff pastry sheets', 'Almond flour', 'Coconut flakes', 'Sugar', 'Butter', 'Vanilla extract', 'White chocolate chips', 'Whole almonds', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix almond flour, coconut flakes, sugar, melted butter, and vanilla extract',
			'Roll out puff pastry on floured surface',
			'Spread the almond-coconut mixture evenly over the pastry',
			'Sprinkle white chocolate chips over the mixture',
			'Place whole almonds on top of the mixture',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p15',
		[ 'c3' ],
		'Red Velvet Pastry',
		'affordable',
		'simple',
		'https://cdn-hnipj.nitrocdn.com/bLLYVWTkuWVULSBJPlWIHEexFXNLNQET/assets/images/optimized/rev-d5234ed/meer.com.pk/wp-content/uploads/2023/11/untitled-39.png',
		['Puff pastry sheets', 'Cocoa powder', 'Red food coloring', 'Vanilla extract', 'Sugar', 'Butter', 'Cream cheese', 'Powdered sugar', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix cocoa powder, red food coloring, and vanilla extract until smooth',
			'In another bowl, cream together sugar and butter until light and fluffy',
			'Gradually add cocoa mixture to the creamed butter mixture, mixing well',
			'Roll out puff pastry on floured surface',
			'Spread the red velvet mixture evenly over the pastry',
			'Dollop cream cheese mixture over the red velvet layer',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p16',
		[ 'c3' ],
		'Stawbery Icing Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/05/strawberry_icing_pastry-1.png',
		['Puff pastry sheets', 'Strawberries', 'Sugar', 'Cornstarch', 'Lemon juice', 'Vanilla extract', 'Egg wash'],
		[
			'Preheat oven to specified temperature',
			'In a saucepan, combine chopped strawberries, sugar, cornstarch, and lemon juice',
			'Cook over medium heat until strawberries break down and mixture thickens',
			'Remove from heat and stir in vanilla extract',
			'Let strawberry mixture cool slightly',
			'Roll out puff pastry on floured surface',
			'Spread the cooled strawberry mixture evenly over the pastry',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p17',
		[ 'c3' ],
		'Vanilla Icing Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/05/vanilla_icing_pastry.png',
		['Puff pastry sheets', 'Powdered sugar', 'Butter', 'Milk', 'Vanilla extract', 'Salt', 'Egg wash'],
		[
			'Preheat oven to specified temperature',
			'In a bowl, whisk together powdered sugar, melted butter, milk, vanilla extract, and a pinch of salt until smooth',
			'Roll out puff pastry on floured surface',
			'Spread the vanilla icing evenly over the pastry',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p18',
		[ 'c3' ],
		'Coffee Fudge Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/05/coffee_fudge.png',
		['Puff pastry sheets', 'Instant coffee powder', 'Butter', 'Brown sugar', 'Heavy cream', 'Vanilla extract', 'Salt'],
		[
			'Preheat oven to specified temperature',
			'Dissolve instant coffee powder in hot water',
			'In a saucepan, melt butter over medium heat',
			'Stir in brown sugar, heavy cream, vanilla extract, and a pinch of salt',
			'Cook until mixture thickens slightly',
			'Remove from heat and stir in dissolved coffee mixture',
			'Let coffee fudge mixture cool slightly',
			'Roll out puff pastry on floured surface',
			'Spread the coffee fudge mixture evenly over the pastry',
			'Roll up pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p19',
		[ 'c3' ],
		'Choclate Cream Roll',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/chocalte_creamroll-1-248x300-1.png',
		['Cake flour', 'Cocoa powder', 'Baking powder', 'Salt', 'Eggs', 'Granulated sugar', 'Vanilla extract', 'Milk', 'Butter', 'Heavy cream', 'Powdered sugar', 'Dark chocolate chips'],
		[
			'Preheat oven, grease and line jelly roll pan',
			'Sift dry ingredients',
			'Beat eggs and sugar until thick',
			'Add vanilla, fold in dry ingredients, milk, and melted butter',
			'Pour batter into pan, bake until set',
			'Invert cake onto powdered sugar-dusted towel',
			'Roll cake in towel, let cool',
			'Whip heavy cream with powdered sugar, fold in melted chocolate',
			'Unroll cooled cake, spread filling',
			'Roll cake, refrigerate before serving'
		]
	),

	new Meal(
		'p20',
		[ 'c3' ],
		'Coconut Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/coconut_pastry-1.png',
		[ 'Puff pastry sheets', 'Shredded coconut', 'Sugar', 'Butter', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix shredded coconut and sugar',
			'Melt butter and brush over the puff pastry',
			'Sprinkle the coconut mixture evenly over the pastry',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p21',
		[ 'c3' ],
		'Cheese Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/cheese_pastry.png',
		[ 'Puff pastry sheets', 'Cheese (such as Cheddar or Gruyere)', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'Grate or thinly slice cheese',
			'Lay out puff pastry sheets',
			'Sprinkle cheese evenly over pastry',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p22',
		[ 'c3' ],
		'Honey Almond Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/honey_almond_pastry.png',
		['Puff pastry sheets', 'Almonds', 'Honey', 'Butter', 'Egg wash (optional)']
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix almonds with honey',
			'Melt butter and brush over the puff pastry',
			'Spread the almond-honey mixture evenly over the pastry',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p23',
		[ 'c3' ],
		'Black Currant Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/black_currant.png',
		['Puff pastry sheets', 'Black currants', 'Sugar', 'Butter', 'Egg wash (optional)' ],
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix black currants with sugar',
			'Melt butter and brush over the puff pastry',
			'Spread the black currant mixture evenly over the pastry',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p24',
		[ 'c3' ],
		'Choclate Cheese Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/chocolate_cheese-1.png',
		[ 'Puff pastry sheets', 'Chocolate chips', 'Cream cheese', 'Sugar', 'Vanilla extract', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'In a bowl, mix cream cheese with sugar and vanilla extract until smooth',
			'Sprinkle chocolate chips evenly over the puff pastry',
			'Spread the cream cheese mixture over the chocolate chips',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p25',
		[ 'c3' ],
		'Oreo Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/orea_pastry_1.png',
		['Puff pastry sheets', 'Oreo cookies', 'Butter', 'Brown sugar', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'Crush Oreo cookies into fine crumbs',
			'Melt butter and mix with brown sugar',
			'Spread the butter-sugar mixture evenly over the puff pastry',
			'Sprinkle crushed Oreo cookies over the butter-sugar mixture',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'p26',
		[ 'c3' ],
		'Vanilla Mocca Bar Pastry',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/mocca_bar_pastry.png',
		['Puff pastry sheets', 'Instant coffee powder', 'Vanilla extract', 'Butter', 'Brown sugar', 'Egg wash (optional)'],
		[
			'Preheat oven to specified temperature',
			'Dissolve instant coffee powder in hot water',
			'Mix vanilla extract with melted butter',
			'Spread the vanilla-coffee mixture evenly over the puff pastry',
			'Sprinkle brown sugar over the mixture',
			'Roll up the pastry tightly into a log',
			'Cut the log into slices',
			'Place slices on a lined baking sheet',
			'Optional: Brush with egg wash for shine',
			'Bake until golden brown and puffed',
			'Cool before serving'
		]
	),

	new Meal(
		'sa1',
		[ 'c4' ],
		'Chicken Tikka Sandwich',
		'affordable',
		'simple',
		'https://theobroma.in/cdn/shop/products/HIGHRESChickenTikkaSandwich-Square-red.jpg?v=1673799422',
		[   'Chicken Breast','Yogurt','Lemon Juice','Ginger Garlic Paste','Garam Masala','Paprika','Cumin',
			'Salt','Black Pepper','Olive Oil','Onion','Bell Pepper','Tomato','Cilantro','Mint Chutney',
			'Naan Bread'],
		[
			'Marinate chicken in yogurt, lemon, spices',
			'Grill marinated chicken until cooked',
			'Sauté veggies like onion, bell pepper, tomato',
			'Assemble sandwich naan, chicken, veggies',
			'Drizzle mint chutney',
			'Garnish with cilantro'
		]
	),

	new Meal(
		'sa2',
		[ 'c4' ],
		'Chicken Vegetarian Sandwich',
		'affordable',
		'simple',
		'https://img.taste.com.au/VpSahEG7/w643-h428-cfill-q90/taste/2016/11/marinated-chicken-club-sandwich-1970-1.jpeg',
		[ 'Chickpeas (canned)','Greek Yogurt','Lemon Juice','Cucumber','Tomato','Red Onion','Lettuce',
			'Feta Cheese','Olive Oil','Garlic Powder','Paprika','Salt','Black Pepper','Pita Bread'],
		[
			'Mash chickpeas, mix with yogurt, lemon',
    		'Add diced cucumber, tomato, onion',
			'Toss in lettuce, feta, olive oil',
			'Season with garlic, paprika, salt, pepper',
			'Fill pita with mixture',
			'Grill or heat in oven',
		]
	),

	new Meal(
		'sa3',
		[ 'c4' ],
		'Classic Cheese Sandwich',
		'affordable',
		'simple',
		'https://www.coopercheese.com/wp-content/uploads/2022/02/Classic-Grilled-Cheese-624x547.webp',
		[ 'Bread Slices','Butter','Cheddar Cheese','Swiss Cheese','Mayo','Mustard','Pickles (optional)',
			'Salt','Black Pepper' ],
		[
			'Butter bread slices',
			'Layer cheddar and swiss',
			'Spread mayo and mustard',
			'Add pickles if desired',
			'Sprinkle salt, pepper',
			'Assemble, grill until golden',
		]
	),

	new Meal(
		'sa4',
		[ 'c4' ],
		'Egg Cheese Sandwich',
		'affordable',
		'simple',
		'https://www.allthingsmamma.com/wp-content/uploads/2023/04/egg-and-cheese-sandwich-hero-4-800x1200.jpg',
		['Bread Slices','Eggs','Cheese Slices','Butter','Salt','Black Pepper','Chives (optional)'
		],
		[
			'Butter bread slices',
			'Cook eggs sunny-side-up',
			'Place eggs on bread',
			'Add cheese slices',
			'Sprinkle salt, pepper, chives',
			'Top with another slice',
			'Grill until cheese melts'
		]
	),

	new Meal(
		'sa5',
		[ 'c4' ],
		'Grilled Chicken Panini',
		'affordable',
		'simple',
		'https://www.thespruceeats.com/thmb/UzASBvmJ-hr99gR8kll2HpZua7M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-chicken-panini-sandwich-recipe-2097378-hero-01-09e7d3d7e8604a8a90217e6f9e356648.jpg',
		['Chicken Breast','Ciabatta Bread','Mozzarella Cheese','Sun-Dried Tomatoes','Pesto Sauce','Olive Oil',
		'Salt','Black Pepper'
		],
		[
			'Grill chicken, slice into strips',
			'Cut ciabatta into sandwich-sized pieces',
			'Layer chicken, cheese, tomatoes',
			'Spread pesto on top',
			'Drizzle olive oil, salt, pepper',
			'Assemble, press in panini press',
			'Grill until golden and cheese melts'
		]
	),

	new Meal(
		'sa6',
		[ 'c4' ],
		'Plain Sandwich',
		'affordable',
		'simple',
		'https://springs.com.pk/cdn/shop/products/plainsandwich.png?v=1667907775',
		['Bread Slices','Butter','Deli Ham','Swiss Cheese','Lettuce','Mayonnaise','Mustard','Salt',
		'Black Pepper'],
		[
			'Butter bread slices',
			'Layer ham and cheese',
			'Add lettuce, mayo, mustard',
			'Sprinkle salt, pepper',
			'Top with another slice',
		]
	),

	new Meal(
		'sa7',
		[ 'c4' ],
		'BBQ Chicken Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/BBQ-Chicken.jpg',
		[ 'Chicken breast', 'Barbecue sauce', 'Burger buns', 'Lettuce', 'Tomato', 'Red onion', 'Mayonnaise', 'Salt', 'Pepper', 'Olive oil'],
		[
			'Season chicken breast with salt and pepper',
			'Heat olive oil in a skillet over medium heat',
			'Cook chicken breast until fully cooked and slightly charred, about 6-8 minutes per side',
			'Remove chicken from skillet and let it rest for a few minutes',
			'Slice burger buns in half and toast them lightly',
			'Spread mayonnaise on the bottom half of each bun',
			'Layer lettuce, tomato slices, and red onion slices on the bottom half of the buns',
			'Place cooked chicken breast on top',
			'Drizzle barbecue sauce over the chicken',
			'Cover with the top half of the buns',
			'Serve immediately and enjoy your BBQ chicken sandwich'
		]
	),

	new Meal(
		'sa8',
		[ 'c4' ],
		'Chicken Fajita Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/Fajita.jpg',
		[ 'Chicken breast', 'Fajita seasoning', 'Bell peppers', 'Onion', 'Olive oil', 'Lime juice', 'Salt', 'Pepper', 'Tortilla wraps', 'Sour cream', 'Guacamole', 'Salsa'],
		[
			'Marinate chicken breast with fajita seasoning, lime juice, salt, and pepper',
			'Heat olive oil in a skillet over medium-high heat',
			'Cook chicken breast until fully cooked and slightly charred, about 6-8 minutes per side',
			'Remove chicken from skillet and let it rest for a few minutes',
			'In the same skillet, sauté sliced bell peppers and onions until tender',
			'Slice cooked chicken breast into strips',
			'Warm tortilla wraps in the skillet or microwave',
			'Spread sour cream and guacamole on each tortilla',
			'Place chicken strips and sautéed bell peppers and onions on top',
			'Drizzle with salsa',
			'Fold tortilla wraps and serve immediately. Enjoy your chicken fajita sandwich!'
		]
	),

	new Meal(
		'sa9',
		[ 'c4' ],
		'Chicken Tandoori Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/Tandoori.jpg',
		['Chicken breast', 'Tandoori masala', 'Yogurt', 'Lemon juice', 'Garlic paste', 'Ginger paste', 'Salt', 'Pepper', 'Naan bread or sandwich bread', 'Lettuce', 'Tomato', 'Red onion', 'Mint chutney or yogurt sauce'],
		[
			'Marinate chicken breast with tandoori masala, yogurt, lemon juice, garlic paste, ginger paste, salt, and pepper.',
			'Refrigerate chicken and let it marinate for at least 1 hour or overnight',
			'Preheat grill or grill pan over medium-high heat',
			'Grill chicken breast until fully cooked and slightly charred, about 6-8 minutes per side',
			'Remove chicken from grill and let it rest for a few minutes',
			'Slice chicken breast into thin strips',
			'Warm naan bread or sandwich bread',
			'Spread mint chutney or yogurt sauce on one side of the bread',
			'Layer lettuce, tomato slices, red onion slices, and grilled chicken strips on top',
			'Cover with another piece of bread to form a sandwich',
			'Slice in half and serve immediately. Enjoy your chicken tandoori sandwich!'
		]
	),

	new Meal(
		'sa10',
		[ 'c4' ],
		'Italian B.M.T Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-italianBMT_B.jpg',
		['Italian bread', 'Bacon', 'Salami', 'Pepperoni', 'Ham', 'Provolone cheese', 'Lettuce', 'Tomato', 'Red onion', 'Banana peppers', 'Black olives', 'Oil and vinegar dressing', 'Salt', 'Pepper'],
		[
			'Preheat oven to specified temperature',
			'Slice Italian bread in half lengthwise',
			'Layer bacon, salami, pepperoni, and ham on the bottom half of the bread',
			'Add provolone cheese on top of the meat',
			'Place the sandwich in the oven and bake until cheese is melted and bread is toasted',
			'Remove from oven and let it cool slightly',
			'Top with lettuce, tomato slices, red onion slices, banana peppers, and black olives',
			'Drizzle with oil and vinegar dressing',
			'Sprinkle with salt and pepper to taste',
			'Cover with the other half of the bread',
			'Slice and serve immediately. Enjoy your Italian B.M.T sandwich!'
		]
	),

	new Meal(
		'sa11',
		[ 'c4' ],
		'Oven Roasted Chicken Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-ovnrstdchicken.jpg',
		[ 'Chicken breast', 'Olive oil', 'Salt', 'Pepper', 'Garlic powder', 'Onion powder', 'Lettuce', 'Tomato', 'Avocado', 'Mayonnaise', 'Mustard', 'Sandwich bread'],
		[
			'Preheat oven to specified temperature',
			'Place chicken breast on a baking sheet',
			'Drizzle with olive oil',
			'Season with salt, pepper, garlic powder, and onion powder',
			'Bake in the preheated oven until fully cooked, about 20-25 minutes',
			'Remove from oven and let it cool slightly',
			'Slice chicken breast into thin strips',
			'To assemble the sandwich, spread mayonnaise and mustard on one slice of bread',
			'Layer lettuce, tomato slices, avocado slices, and roasted chicken strips on top',
			'Cover with another slice of bread',
			'Slice and serve immediately. Enjoy your oven roasted chicken sandwich!'
		]
	),

	new Meal(
		'sa12',
		[ 'c4' ],
		'Peri Chicken Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/Peri-Peri.jpg',
		[ 'Chicken breast', 'Peri-peri sauce', 'Olive oil', 'Lemon juice', 'Salt', 'Pepper', 'Lettuce', 'Tomato', 'Red onion', 'Mayonnaise', 'Sandwich buns'],
		[
			'Marinate chicken breast in peri-peri sauce, olive oil, lemon juice, salt, and pepper for at least 30 minutes',
			'Preheat grill or grill pan over medium-high heat',
			'Grill chicken breast until fully cooked, about 6-8 minutes per side',
			'Remove chicken from grill and let it rest for a few minutes',
			'Slice chicken breast into thin strips',
			'Slice sandwich buns in half and lightly toast them',
			'Spread mayonnaise on the bottom half of each bun',
			'Layer lettuce, tomato slices, red onion slices, and grilled peri chicken strips on top',
			'Cover with the top half of the buns',
			'Slice in half and serve immediately. Enjoy your peri chicken sandwich!'
		]
	),

	new Meal(
		'sa13',
		[ 'c4' ],
		'Roast Beef Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-roastbeef_B.jpg',
		['Roast beef slices', 'Swiss cheese slices', 'Ciabatta bread', 'Horseradish sauce', 'Lettuce', 'Tomato', 'Red onion', 'Salt', 'Pepper', 'Olive oil', 'Mayonnaise'],
		[
			'Preheat oven to specified temperature',
			'Slice ciabatta bread horizontally',
			'Spread horseradish sauce and mayonnaise on the bottom half of the bread',
			'Layer roast beef slices and Swiss cheese slices on the bottom half of the bread',
			'Top with lettuce, tomato slices, and red onion slices',
			'Sprinkle with salt and pepper, and drizzle with olive oil',
			'Cover with the top half of the bread',
			'Wrap the sandwich tightly in foil and place it in the preheated oven for 10-15 minutes, until the cheese is melted and the bread is warmed through',
			'Remove from the oven, unwrap, slice, and serve immediately. Enjoy your roast beef sandwich!'
		]
	),

	new Meal(
		'sa14',
		[ 'c4' ],
		'Steak & Chheese Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-steakandcheese_B.jpg',
		[ 'Steak slices', 'Cheese slices', 'Baguette', 'Onion', 'Bell peppers', 'Mushrooms', 'Garlic', 'Salt', 'Pepper', 'Olive oil', 'Mayonnaise', 'Mustard'],
		[
			'Preheat a skillet over medium-high heat',
			'Slice baguette horizontally and spread mayonnaise and mustard on one side of each slice',
			'In the skillet, sauté sliced onion, bell peppers, mushrooms, and minced garlic until tender',
			'Remove vegetables from skillet and set aside',
			'In the same skillet, cook steak slices until desired doneness',
			'Season steak with salt and pepper',
			'Layer cheese slices on top of the steak slices and let them melt',
			'To assemble the sandwich, place cooked steak and cheese on the bottom half of the baguette',
			'Top with sautéed vegetables',
			'Cover with the top half of the baguette',
			'Slice and serve immediately. Enjoy your steak and cheese sandwich!'
		]
	),

	new Meal(
		'sa15',
		[ 'c4' ],
		'Subway Club Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-subwayclub_B.jpg',
		[ 'Turkey slices', 'Ham slices', 'Roast beef slices', 'Bacon strips', 'Swiss cheese slices', 'Lettuce', 'Tomato', 'Cucumber', 'Onion', 'Mayonnaise', 'Mustard', 'Subway sandwich bread'],
		[
			'Slice Subway sandwich bread horizontally',
			'Spread mayonnaise and mustard on one side of each slice',
			'Layer turkey slices, ham slices, roast beef slices, and bacon strips on the bottom half of the bread',
			'Add Swiss cheese slices on top of the meat and bacon',
			'Top with lettuce, tomato slices, cucumber slices, and onion slices',
			'Cover with the top half of the bread',
			'Slice and serve immediately. Enjoy your Subway Club sandwich!'
		]
	),

	new Meal(
		'sa16',
		[ 'c4' ],
		'Sweet Onion Chicken Teriyaki Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-SWOCT_B.jpg',
		[ 'Chicken breast', 'Teriyaki sauce', 'Sweet onion', 'Lettuce', 'Tomato', 'Mayonnaise', 'Honey mustard', 'Cheese slices', 'Sandwich buns'],
		[
			'Marinate chicken breast in teriyaki sauce for at least 30 minutes',
			'Preheat grill or grill pan over medium-high heat',
			'Grill chicken breast until fully cooked, about 6-8 minutes per side',
			'While chicken is grilling, slice sweet onion thinly and sauté until caramelized',
			'Slice sandwich buns in half and lightly toast them',
			'Spread mayonnaise and honey mustard on the bottom half of each bun',
			'Layer grilled chicken breast on the bottom half of the buns',
			'Top with caramelized sweet onion slices, lettuce, tomato slices, and cheese slices',
			'Cover with the top half of the buns',
			'Slice and serve immediately. Enjoy your Sweet Onion Chicken Teriyaki Sandwich!'
		]
	),

	new Meal(
		'sa17',
		[ 'c4' ],
		'Turkey Thigh Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-ham_B.jpg',
		[ 'Turkey thigh', 'Salt', 'Black pepper', 'Olive oil', 'Lettuce', 'Tomato', 'Red onion', 'Mayonnaise', 'Mustard', 'Sandwich bread'],
		[
			'Preheat oven to specified temperature',
			'Season turkey thigh with salt and black pepper',
			'Heat olive oil in a skillet over medium-high heat',
			'Sear turkey thigh on both sides until golden brown',
			'Transfer the turkey thigh to a baking dish and bake in the preheated oven until fully cooked, about 20-25 minutes',
			'Remove from oven and let it rest for a few minutes before slicing',
			'Slice sandwich bread and toast lightly if desired',
			'Spread mayonnaise and mustard on one side of each slice of bread',
			'Layer lettuce, tomato slices, red onion slices, and sliced turkey thigh on top of one slice of bread',
			'Cover with the other slice of bread to form a sandwich',
			'Slice and serve immediately. Enjoy your Turkey Thigh Sandwich!'
		]
	),

	new Meal(
		'sa18',
		[ 'c4' ],
		'Tuna Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-tuna.jpg',
		['Canned tuna', 'Mayonnaise', 'Celery', 'Red onion', 'Lemon juice', 'Salt', 'Black pepper', 'Lettuce', 'Tomato', 'Sandwich bread'],
		[
			'Drain canned tuna and transfer it to a mixing bowl',
			'Finely chop celery and red onion, then add to the tuna',
			'Squeeze lemon juice over the tuna mixture',
			'Season with salt and black pepper to taste',
			'Add mayonnaise to the tuna mixture and mix well to combine',
			'Slice sandwich bread and toast lightly if desired',
			'Spread tuna mixture onto one slice of bread',
			'Layer lettuce and tomato slices on top of the tuna mixture',
			'Cover with the other slice of bread to form a sandwich',
			'Slice and serve immediately. Enjoy your Tuna Sandwich!'
		]
	),

	new Meal(
		'sa19',
		[ 'c4' ],
		'Turkey Beast Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-turkeybreast_B.jpg',
		['Turkey breast', 'Salt', 'Black pepper', 'Olive oil', 'Lettuce', 'Tomato', 'Red onion', 'Mayonnaise', 'Mustard', 'Sandwich bread'],
		[
			'Preheat oven to specified temperature',
			'Season turkey breast with salt and black pepper',
			'Heat olive oil in a skillet over medium-high heat',
			'Sear turkey breast on both sides until golden brown',
			'Transfer the turkey breast to a baking dish and bake in the preheated oven until fully cooked, about 20-25 minutes',
			'Remove from oven and let it rest for a few minutes before slicing',
			'Slice sandwich bread and toast lightly if desired',
			'Spread mayonnaise and mustard on one side of each slice of bread',
			'Layer lettuce, tomato slices, red onion slices, and sliced turkey breast on top of one slice of bread',
			'Cover with the other slice of bread to form a sandwich',
			'Slice and serve immediately. Enjoy your Turkey Breast Sandwich!'
		]
	),

	new Meal(
		'sa20',
		[ 'c4' ],
		'Veggie Delite Sandwich',
		'affordable',
		'simple',
		'https://www.subway.com/ns/images/menu/PAK/ENG/menu-category-sandwich-veggiedelite.jpg',
		['Bread Slices','Butter','Deli Ham','Swiss Cheese','Lettuce','Mayonnaise','Mustard','Salt',
		'Black Pepper'],
		[
			'Cut whole wheat bread into desired slices',
			'Wash and slice lettuce, tomato, cucumber, green bell pepper, and red onion',
			'Slice black olives',
			'Arrange lettuce, tomato, cucumber, green bell pepper, red onion, and black olives on one slice of bread',
			'Season with salt and pepper',
			'Drizzle with olive oil and vinegar',
			'Cover with another slice of bread',
			'Slice and serve immediately. Enjoy your Veggie Delite Sandwich!'
		]
	),

	new Meal(
		'sa21',
		[ 'c4' ],
		'Ham Sandwich',
		'affordable',
		'simple',
		'https://www.lacademie.com/wp-content/uploads/2022/03/ham-sandwich.webp',
		[ 'Sliced ham', 'Swiss cheese', 'Whole wheat bread', 'Lettuce', 'Tomato', 'Mayonnaise', 'Mustard', 'Salt', 'Pepper'],
		[
			'Place sliced ham and Swiss cheese on one slice of whole wheat bread',
			'Add lettuce and tomato slices on top',
			'Spread mayonnaise and mustard on the other slice of bread',
			'Season with salt and pepper',
			'Cover with the other slice of bread to form a sandwich',
			'Slice and serve immediately. Enjoy your Ham Sandwich!'
		]
	),

	new Meal(
		'sa22',
		[ 'c4' ],
		'Melt Sandwich',
		'affordable',
		'simple',
		'https://www.lacademie.com/wp-content/uploads/2022/03/melt-sandwich.webp',
		[ 'Sliced bread', 'Cheddar cheese', 'Mozzarella cheese', 'Butter', 'Garlic powder', 'Salt', 'Pepper'],
		[
			'Butter one side of each bread slice',
			'Place cheddar and mozzarella cheese slices on the non-buttered side of one bread slice',
			'Sprinkle garlic powder, salt, and pepper over the cheese',
			'Cover with the other bread slice, buttered side facing out',
			'Heat a skillet over medium heat',
			'Place the sandwich in the skillet and cook until the bread is golden brown and the cheese is melted, flipping once',
			'Remove from skillet, slice, and serve hot. Enjoy your Melt sandwich!'
		]
	),

	new Meal(
		'sa23',
		[ 'c4' ],
		'Meatball Sandwich',
		'affordable',
		'simple',
		'https://www.lacademie.com/wp-content/uploads/2022/03/meatball-sandwich.webp',
		['Meatballs', 'Sub rolls', 'Marinara sauce', 'Mozzarella cheese', 'Parmesan cheese', 'Olive oil', 'Garlic', 'Salt', 'Pepper', 'Italian seasoning'],
		[
			'Preheat oven to specified temperature',
			'In a skillet, heat olive oil over medium heat and sauté minced garlic until fragrant',
			'Add meatballs to the skillet and cook until browned on all sides',
			'Pour marinara sauce over the meatballs and simmer for a few minutes',
			'Split sub rolls and place them on a baking sheet',
			'Place meatballs on one side of each roll and spoon some marinara sauce over them',
			'Sprinkle mozzarella and Parmesan cheese over the meatballs',
			'Sprinkle with salt, pepper, and Italian seasoning',
			'Cover with the other side of the rolls',
			'Bake in the preheated oven until the cheese is melted and bubbly',
			'Remove from oven, slice if desired, and serve hot. Enjoy your Meatball Sandwich!'
		]
	),

	new Meal(
		'sa24',
		[ 'c4' ],
		'Tea Sandwich',
		'affordable',
		'simple',
		'https://www.lacademie.com/wp-content/uploads/2022/03/tea-sandwich.webp',
		['Sliced bread', 'Cucumber', 'Cream cheese', 'Fresh dill', 'Salt', 'Black pepper'],
		[
			'Slice cucumber thinly',
			'In a bowl, mix cream cheese with chopped fresh dill, salt, and black pepper',
			'Spread the cream cheese mixture evenly onto one side of each bread slice',
			'Arrange cucumber slices evenly on half of the bread slices',
			'Cover with the remaining bread slices to form sandwiches',
			'Cut off the crusts from each sandwich, if desired',
			'Cut each sandwich into desired shapes, such as triangles or squares',
			'Serve immediately and enjoy your Tea Sandwiches!'
		]
	),

	new Meal(
		'sa25',
		[ 'c4' ],
		'Bologna Sandwich',
		'affordable',
		'simple',
		'https://www.lacademie.com/wp-content/uploads/2022/03/bologna-sandwich.webp',
		[ 'Sliced bologna', 'Sliced bread', 'Lettuce', 'Tomato', 'Mayonnaise', 'Mustard', 'Salt', 'Pepper'],
		[
			'Place bologna slices on one slice of bread',
			'Add lettuce and tomato slices on top',
			'Spread mayonnaise and mustard on the other slice of bread',
			'Season with salt and pepper',
			'Cover with the other slice of bread to form a sandwich',
			'Slice and serve immediately. Enjoy your Bologna Sandwich!'
		]
	),

	new Meal(
		'd1',
		[ 'c5' ],
		'Blueberry Donut',
		'affordable',
		'simple',
		'https://inbloombakery.com/wp-content/uploads/2021/04/Blueberry-Cake-Donuts-FI.jpg',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Blueberries','Vanilla Extract',
		'Butter','Powdered Sugar','Vegetable Oil'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Fold in blueberries gently',
			'Heat oil for frying',
			'Drop spoonfuls, fry until golden',
			'Drain on paper, cool',
			'Roll in powdered sugar'
		]
	),

	new Meal(
		'd2',
		[ 'c5' ],
		'Choclate Donut',
		'affordable',
		'simple',
		'https://prettysimplesweet.com/wp-content/uploads/2019/07/Chocolate-Donuts.jpg',
		['All-Purpose Flour','Cocoa Powder','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar','Chocolate Glaze'
		],
		[
			'Mix flour, cocoa, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until firm',
			'Cool, dip in chocolate glaze',
			'Sprinkle with powdered sugar'
		]
	),

	new Meal(
		'd3',
		[ 'c5' ],
		'Coconut Donut',
		'affordable',
		'simple',
		'https://assets.epicurious.com/photos/54b0649ffca98987608b23ae/master/pass/51126410_coconut-doughnuts_1x1.jpg',
		['All-Purpose Flour','Coconut Flakes','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Coconut Milk','Butter','Powdered Sugar'
		],
		[
			'Mix flour, coconut flakes, sugar, baking powder',
			'Add milk, eggs, vanilla, coconut milk, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd4',
		[ 'c5' ],
		'Coffee Roll Donut',
		'affordable',
		'simple',
		'https://i.pinimg.com/originals/b2/1b/ed/b21bed4e436d5e5e2c7a33ab2a05251e.jpg',
		['Pizza Dough','Butter','Brown Sugar','Cinnamon','Instant Coffee','Milk','Powdered Sugar','Vanilla Extract'
		],
		[
			'Roll out pizza dough',
			'Spread with butter, brown sugar, cinnamon',
			'Dissolve instant coffee in warm milk',
			'Pour coffee mixture over dough',
			'Roll dough into a log',
			'Slice into rounds',
			'Bake until golden',
			'Drizzle with vanilla glaze'
		]
	),

	new Meal(
		'd5',
		[ 'c5' ],
		'Plain Glaazed',
		'affordable',
		'simple',
		'https://media.istockphoto.com/id/1254245677/photo/sweet-donut.jpg?s=612x612&w=0&k=20&c=ApvOMcRUyYYVebwsWOvrKWI7llRrnggQcboff2QgMhw=',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Salt','Powdered Sugar','Water'
		],
		[
			'Mix flour, sugar, baking powder, salt',
			'Add milk, eggs, vanilla',
			'Knead into a soft dough',
			'Roll and cut into rounds',
			'Fry until golden',
			'Mix powdered sugar with water',
			'Dip donuts in glaze'
		]
	),

	new Meal(
		'd6',
		[ 'c5' ],
		'Stawbery Donut',
		'affordable',
		'simple',
		'https://stephaniessweets.com/wp-content/uploads/2022/07/IMG_8620-2.jpg',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add strawberries, milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd7',
		[ 'c5' ],
		'Vanilla Donut',
		'affordable',
		'simple',
		'https://bakerbynature.com/wp-content/uploads/2015/01/IMG_3847-2.jpg',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd8',
		[ 'c5' ],
		'Choclate Marble',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/chocolate_marble_donut.png',
		[ 'All-purpose flour', 'Cocoa powder', 'Baking powder', 'Salt', 'Butter (melted)', 'Granulated sugar', 'Eggs', 'Vanilla extract', 'Milk', 'Powdered sugar (for glaze)', 'Milk (for glaze)', 'Chocolate chips (optional)'],
		[
			'Preheat oven to specified temperature and grease a donut pan',
			'In a mixing bowl, whisk together flour, cocoa powder, baking powder, and salt',
			'In another bowl, mix together melted butter and granulated sugar until well combined',
			'Add eggs one at a time, mixing well after each addition',
			'Stir in vanilla extract',
			'Gradually add dry ingredients to wet mixture, alternating with milk, and mix until smooth',
			'If desired, fold in chocolate chips',
			'Spoon half of the batter into a separate bowl and mix in a little extra cocoa powder to create a darker chocolate batter',
			'Alternate spooning dollops of each batter into the prepared donut pan',
			'Use a toothpick or knife to gently swirl the batters together to create a marbled effect',
			'Bake in the preheated oven for about 10-12 minutes, or until a toothpick inserted into the donuts comes out clean',
			'Allow the donuts to cool in the pan for a few minutes before transferring them to a wire rack to cool completely',
			'In a small bowl, whisk together powdered sugar and milk to make a glaze',
			'Dip the cooled donuts into the glaze, then place them back on the wire rack to set',
			'Enjoy your Chocolate Marble Donuts!'
		]
	),

	new Meal(
		'd9',
		[ 'c5' ],
		'Plain Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/plain_donut.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd10',
		[ 'c5' ],
		'Oreo Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/oreo_donut-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd11',
		[ 'c5' ],
		'Walnut Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/WALNUT-DONUT-1-1-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd12',
		[ 'c5' ],
		'Choclate Filled Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/CHOCOLATE-FILLED-DONUT-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd13',
		[ 'c5' ],
		'Fudge Fill Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/FUDGE-FILLED-DONUT-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd14',
		[ 'c5' ],
		'Sugar Icing Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/Sugar-icing-1-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd15',
		[ 'c5' ],
		'Hazelnut Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/chocolaty_donut_one.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'd16',
		[ 'c5' ],
		'Choclate Fudge Donut',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/chocolaty_donut_two-1.png',
		['All-Purpose Flour','Sugar','Baking Powder','Milk','Eggs','Vanilla Extract',
		'Butter','Powdered Sugar'
		],
		[
			'Mix flour, sugar, baking powder',
			'Add milk, eggs, vanilla, melted butter',
			'Spoon into donut molds',
			'Bake until golden and firm',
			'Cool, roll in powdered sugar'
		]
	),

	new Meal(
		'b1',
		[ 'c6' ],
		'Brown Bread',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/msid-90104124/90104124.jpg?width=500&resizemode=4',
		['Whole Wheat Flour','Water','Honey','Olive Oil','Yeast','Salt'
		],
		[
			'Combine flour, water, honey, olive oil',
			'Add yeast, salt, knead into dough',
			'Let rise until doubled in size',
			'Shape into a loaf',
			'Bake until golden and hollow-sounding',
			'Cool before slicing'
		]
	),

	new Meal(
		'b2',
		[ 'c6' ],
		'Crossiant',
		'affordable',
		'simple',
		'https://www.theflavorbender.com/wp-content/uploads/2020/05/French-Croissants-SM-2363.jpg',
		['All-Purpose Flour','Butter','Water','Milk','Sugar','Yeast','Salt'],
		[
			'Mix flour, water, milk, sugar, yeast',
			'Add salt, knead into soft dough',
			'Roll out dough, spread with butter',
			'Fold into layers',
			'Chill, repeat folding',
			'Cut, shape into crescents',
			'Bake until golden brown'
		]
	),

	new Meal(
		'b3',
		[ 'c6' ],
		'Lemon Bread',
		'affordable',
		'simple',
		'https://amindfullmom.com/wp-content/uploads/2019/04/Delicious-Lemon-Bread.jpg',
		['Flour','Sugar','Eggs','Lemon Zest','Lemon Juice','Butter','Baking Powder','Salt','Milk'],
		[
			'Cream sugar, butter, eggs',
			'Mix in flour, baking powder, salt',
			'Add lemon zest, juice, milk',
			'Pour into a greased pan',
			'Bake until golden and set'
		]
	),

	new Meal(
		'b4',
		[ 'c6' ],
		'Multigrain Bread',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/76626392.cms?width=1200&height=900',
		['Multigrain Flour','Water','Honey','Olive Oil','Yeast','Salt'],
		[
			'Mix flour, water, honey, olive oil',
			'Add yeast, salt, knead into dough',
			'Let rise until doubled in size',
			'Shape into a loaf',
			'Bake until golden and hollow-sounding',
			'Cool before slicing'
		]
	),

	new Meal(
		'b5',
		[ 'c6' ],
		'Multigrain Bun',
		'affordable',
		'simple',
		'https://saladinajar.com/wp-content/uploads/2012/08/seeded-buns-saladinajar.jpg',
		['Multigrain Flour','Water','Honey','Olive Oil','Yeast','Salt','Milk'],
		[
			'Mix flour, water, honey, olive oil',
			'Add yeast, salt, knead into dough',
			'Let rise until doubled in size',
			'Shape into bun',
			'Brush with milk for a glaze',
			'Bake until golden and firm'
		]
	),

	new Meal(
		'b6',
		[ 'c6' ],
		'Pav Bun',
		'affordable',
		'simple',
		'https://www.sonibakers.com/uploaded_files/products/dsc_5806.JPG',
		['All-Purpose Flour','Milk','Water','Sugar','Butter','Yeast','Salt'],
		[
			'Combine flour, milk, water, sugar, yeast',
			'Add salt, knead into a soft dough',
			'Let rise until doubled in size',
			'Shape into pav buns',
			'Bake until golden brown',
			'Brush with melted butter'
		]
	),

	new Meal(
		'b7',
		[ 'c6' ],
		'Plain Bread',
		'affordable',
		'simple',
		'https://zafarullahsweets.pk/cdn/shop/products/plain-white-5_1024x1024_crop_center.jpg?v=1644067920',
		['Bread Flour','Water','Sugar','Yeast','Salt'],
		[
			'Combine flour, water, sugar, salt, yeast',
			'Knead into a smooth dough',
			'Let rise until doubled',
			'Shape into a loaf',
			'Bake until golden brown',
			'Cool before slicing'
		]
	),

	new Meal(
		'b8',
		[ 'c6' ],
		'Plain Bun',
		'affordable',
		'simple',
		'https://fujibakery.com.my/wp-content/uploads/2013/10/Burger-Bun-1.jpg',
		['All-Purpose Flour','Milk','Sugar','Butter','Yeast','Salt'],
		[
			'Mix flour, warm milk, sugar, melted butter',
			'Add salt, yeast, knead into dough',
			'Let rise until doubled',
			'Shape into buns',
			'Bake until golden brown',
			'Brush with butter'
		]
	),

	new Meal(
		'b9',
		[ 'c6' ],
		'Sheermal',
		'affordable',
		'simple',
		'https://naturals.pk/cdn/shop/products/IMG_1685_1500x.jpg?v=1647330313',
		['Bakery flour','Sugar','Instant yeast powser','Milk','Water','Egg','Liquid Oil','Salt','Saffron'],
		[
			'Mix flour, warm milk, ghee, sugar, yeast',
			'Add saffron-infused milk, salt',
			'Knead into a soft dough',
			'Shape into flat rounds',
			'Bake until golden',
			'Brush with ghee'
		]
	),

	new Meal(
		'b10',
		[ 'c6' ],
		'Butter Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/Butter-bread.png',
		[ 'Sliced bread', 'Butter'],
		[
			'Spread butter evenly on one side of each bread slice',
			'Use as desired in your recipes. Enjoy your buttered bread!'
		]
	),

	new Meal(
		'b11',
		[ 'c6' ],
		'Milky Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/Milky-bread-1.png',
		['Sliced bread', 'Milk'],
		[
			'Pour milk over each slice of bread, allowing it to soak for a few seconds',
			'Use as desired in your recipes. Enjoy your milky bread!'
		]
	),

	new Meal(
		'b12',
		[ 'c6' ],
		'Housy Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/House-bread.png',
		['Bakery flour','Sugar','Instant yeast powser','Milk','Water','Egg','Liquid Oil','Salt','Saffron'],
		[
			'Mix flour, warm milk, ghee, sugar, yeast',
			'Add saffron-infused milk, salt',
			'Knead into a soft dough',
			'Shape into flat rounds',
			'Bake until golden',
			'Brush with ghee'
		]
	),

	new Meal(
		'b13',
		[ 'c6' ],
		'Fruit Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/fruit_bread.png',
		[ 'Sliced bread', 'Assorted fruits (such as bananas, strawberries, blueberries)', 'Honey or maple syrup', 'Cinnamon (optional)'],
		[
			'Place sliced bread on a plate or cutting board',
			'Layer assorted fruits on top of the bread slices',
			'Drizzle honey or maple syrup over the fruits for sweetness',
			'Sprinkle cinnamon on top for added flavor, if desired',
			'Cover with another slice of bread to form a sandwich, if desired',
			'Slice and serve immediately. Enjoy your Fruit Bread!'
		]
	),

	new Meal(
		'b14',
		[ 'c6' ],
		'Whole Wheat Grain Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/whole_wheat_grain.png',
		[ 'Whole wheat flour', 'Water', 'Honey or maple syrup', 'Yeast', 'Salt', 'Olive oil', 'Assorted grains (such as oats, flaxseeds, sunflower seeds, etc.)'],
		[
			'Mix whole wheat flour, water, honey or maple syrup, yeast, and salt in a large bowl to form a dough',
			'Knead the dough for about 10 minutes until smooth and elastic',
			'Cover the dough and let it rise in a warm place until doubled in size, about 1-2 hours',
			'Punch down the dough and knead in assorted grains until well incorporated',
			'Shape the dough into a loaf and place it in a greased loaf pan',
			'Cover and let it rise again until doubled in size, about 30-60 minutes',
			'Preheat oven to specified temperature',
			'Bake the bread in the preheated oven until golden brown and sounds hollow when tapped on the bottom, about 30-40 minutes',
			'Remove from oven and let it cool before slicing. Enjoy your Whole Wheat Grain Bread!'
		]
	),

	new Meal(
		'b15',
		[ 'c6' ],
		'Flat Bun',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/04/flat_bun.png',
		['All-purpose flour', 'Baking powder', 'Salt', 'Butter', 'Milk'],
		[
			'In a mixing bowl, combine all-purpose flour, baking powder, and salt',
			'Cut in the butter until the mixture resembles coarse crumbs',
			'Stir in milk gradually until a soft dough forms',
			'On a floured surface, knead the dough gently for a few minutes',
			'Divide the dough into equal-sized portions and shape each into a flat bun',
			'Place the flat buns on a baking sheet lined with parchment paper',
			'Bake in a preheated oven at the specified temperature until golden brown, about 10-15 minutes',
			'Remove from oven and let them cool slightly before serving. Enjoy your Flat Buns!'
		]
	),

	new Meal(
		'b16',
		[ 'c6' ],
		'Dinner Roll',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/dinner_roll_round.png',
		['All-purpose flour', 'Active dry yeast', 'Warm water', 'Sugar', 'Salt', 'Egg', 'Butter', 'Milk'],
		[
			'Dissolve yeast and sugar in warm water, let it sit for 5-10 minutes until frothy',
			'In a mixing bowl, combine flour and salt',
			'Make a well in the center of the flour mixture and add the yeast mixture, beaten egg, melted butter, and milk',
			'Mix until a soft dough forms',
			'Knead the dough on a floured surface for about 5-7 minutes until smooth and elastic',
			'Place the dough in a greased bowl, cover, and let it rise in a warm place until doubled in size, about 1-2 hours',
			'Punch down the dough and divide it into equal-sized portions',
			'Shape each portion into a ball and place them on a greased baking sheet',
			'Cover and let them rise again until doubled in size, about 30-45 minutes',
			'Preheat oven to specified temperature',
			'Bake the dinner rolls in the preheated oven until golden brown, about 15-20 minutes',
			'Remove from oven and let them cool slightly before serving. Enjoy your Dinner Rolls!'
		]
	),

	new Meal(
		'b17',
		[ 'c6' ],
		'Fruit Bun',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/fruit_bun.png',
		['All-purpose flour', 'Active dry yeast', 'Warm water', 'Sugar', 'Salt', 'Egg', 'Butter', 'Assorted dried fruits (such as raisins, cranberries, chopped apricots)', 'Cinnamon', 'Nutmeg (optional)'],
		[
			'Cream together butter and sugar until light and fluffy',
			'Add eggs one at a time, mixing well after each addition',
			'Sift together flour, baking powder, and salt in a separate bowl',
			'Gradually add dry ingredients to the wet mixture, mixing until combined',
			'Fold in chopped dried fruits and nuts, if using',
			'Drop spoonfuls of dough onto a greased baking sheet',
			'Bake in a preheated oven at specified temperature for 12-15 minutes, or until golden brown',
			'Remove from oven and let cool on a wire rack before serving. Enjoy your Fruit Buns!'
		]
	),

	new Meal(
		'b18',
		[ 'c6' ],
		'Butter Bun',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/04/simple_bun.png',
		['Warm milk', 'Active dry yeast', 'Sugar', 'All-purpose flour', 'Salt', 'Butter (melted)'],
		[
			'Combine warm milk, yeast, and sugar in a bowl, let it sit for 5-10 minutes until frothy',
			'In a large mixing bowl, combine flour and salt',
			'Add the yeast mixture and melted butter to the flour mixture',
			'Knead the dough until smooth and elastic, adding more flour if necessary',
			'Cover the dough and let it rise in a warm place until doubled in size, about 1-2 hours',
			'Punch down the dough and divide it into equal-sized portions',
			'Shape each portion into a bun and place them on a greased baking sheet',
			'Cover and let them rise again until doubled in size, about 30-45 minutes',
			'Preheat oven to specified temperature',
			'Bake the butter buns in the preheated oven until golden brown, about 15-20 minutes',
			'Remove from oven and let them cool slightly before serving. Enjoy your Butter Buns!'
		]
	),

	new Meal(
		'b19',
		[ 'c6' ],
		'Garlic Bread',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/garlic_bread.png',
		[ 'French bread or Baguette', 'Butter', 'Garlic cloves (minced)', 'Fresh parsley (chopped)', 'Salt'],
		[
			'Preheat oven to specified temperature',
			'Slice the French bread or baguette horizontally',
			'Mix minced garlic, chopped parsley, and salt with softened butter in a bowl',
			'Spread the garlic butter mixture evenly over the cut sides of the bread slices',
			'Place the bread slices on a baking sheet, cut side up',
			'Bake in the preheated oven until the edges are golden brown and the butter is melted and bubbly, about 10-15 minutes',
			'Remove from oven and let cool slightly before serving. Enjoy your Garlic Bread!'
		]
	),

	new Meal(
		'b20',
		[ 'c6' ],
		'Flat Rusk',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/flat_rusk-1.png',
		['Sliced bread', 'Butter or oil for brushing (optional)'],
		[
			'Preheat oven to specified temperature',
			'Place sliced bread on a baking sheet in a single layer',
			'Bake in the preheated oven for about 10-15 minutes, or until the bread slices are golden and crispy',
			'Remove from oven and let them cool completely',
			'Once cooled, cut the toasted bread slices into desired shapes, such as rectangles or squares',
			'Optionally, brush each piece with melted butter or oil for added flavor',
			'Return the pieces to the oven and bake for an additional 5-10 minutes, or until they are dry and crisp',
			'Allow to cool completely before serving or storing. Enjoy your Flat Rusks!'
		]
	),

	new Meal(
		'b21',
		[ 'c6' ],
		'Round Rusk',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/round_rusk.png',
		[ 'Sliced bread', 'Butter or oil for brushing (optional)'],
		[
			'Preheat oven to specified temperature',
			'Place sliced bread on a baking sheet in a single layer',
			'Bake in the preheated oven for about 10-15 minutes, or until the bread slices are golden and crispy',
			'Remove from oven and let them cool completely',
			'Once cooled, use a round cookie cutter to cut the toasted bread slices into round shapes',
			'Optionally, brush each piece with melted butter or oil for added flavor',
			'Return the pieces to the oven and bake for an additional 5-10 minutes, or until they are dry and crisp',
			'Allow to cool completely before serving or storing. Enjoy your Round Rusks!'
		]
	),

	new Meal(
		'b22',
		[ 'c6' ],
		'Brown Rusk',
		'affordable',
		'simple',
		'https://www.tehzeeb.com/wp-content/uploads/2020/06/brawn_rusk.png',
		['Whole wheat bread slices', 'Butter or oil for brushing (optional)'],
		[
			'Preheat oven to specified temperature',
			'Place whole wheat bread slices on a baking sheet in a single layer',
			'Bake in the preheated oven for about 10-15 minutes, or until the bread slices are golden and crispy',
			'Remove from oven and let them cool completely',
			'Once cooled, cut the toasted bread slices into desired shapes, such as rectangles or squares',
			'Optionally, brush each piece with melted butter or oil for added flavor',
			'Return the pieces to the oven and bake for an additional 5-10 minutes, or until they are dry and crisp',
			'Allow to cool completely before serving or storing. Enjoy your Brown Rusks!'
		]
	),

	new Meal(
		's1',
		[ 'c7' ],
		'Almond Baklava',
		'affordable',
		'simple',
		'https://www.barleyandsage.com/wp-content/uploads/2023/04/baklava-1200x1200-1.jpg',
		['Phyllo Dough','Almonds (finely chopped)','Unsalted Butter','Sugar','Cinnamon','Water','Honey','Lemon Juice'],
		[
			'Layer phyllo dough sheets with melted butter',
			'Mix chopped almonds, sugar, cinnamon',
			'Sprinkle nut mixture between phyllo layers',
			'Cut into squares or diamonds',
			'Bake until golden brown and crisp',
			'Meanwhile, make sugar syrup with water, honey, lemon juice',
			'Pour hot syrup over baked baklava',
			'Allow it to cool and absorb the syrup'
		]
	),

	new Meal(
		's2',
		[ 'c7' ],
		'Ballourie',
		'affordable',
		'simple',
		'https://farbutnear.com/cdn/shop/products/e820151f318f67e7f8eeac2252ca1c97_1024x1024.jpg?v=1564682333',
		['Pistachio Nuts','Wheat Flour','Sugar','Water','Corn Starch','Honey','Lemon Juice','Rose Water'],
		[
			'Brown vermicelli in butter',
			'Add rice, stir until golden',
			'Pour in milk, simmer until tender',
			'Stir in sugar, rose water',
			'Simmer until thickened',
			'Garnish with pistachios'
		]
	),

	new Meal(
		's3',
		[ 'c7' ],
		'Barfi',
		'affordable',
		'simple',
		'https://i0.wp.com/sialkotbakers.pk/wp-content/uploads/2023/02/BARFI.png?fit=600%2C600&ssl=1',
		['Condensed Milk','Ghee','Milk Powder','Sugar','Cardamom Powder','Almonds (sliced, for garnish)'],
		[
			'Mix condensed milk, ghee, milk powder',
			'Cook on low until thick',
			'Add sugar, cardamom powder',
			'Stir until mixture leaves the sides',
			'Pour into a greased tray',
			'Smooth the surface',
			'Garnish with sliced almonds',
			'Allow it to cool and set'
		]
	),

	new Meal(
		's4',
		[ 'c7' ],
		'Bessan Laddu',
		'affordable',
		'simple',
		'https://pipingpotcurry.com/wp-content/uploads/2020/11/homemade-Besan-Ladoo-Piping-Pot-Curry.jpg',
		['Gram Flour (Besan)','Ghee','Powdered Sugar','Cardamom Powder','Almonds (chopped)'],
		[
			'Roast besan in ghee until aromatic',
			'Allow it to cool',
			'Add powdered sugar, cardamom',
			'Mix well, shape into balls',
			'Garnish with chopped almonds'
		]
	),

	new Meal(
		's5',
		[ 'c7' ],
		'Chum Chum',
		'affordable',
		'simple',
		'https://cdn.cdnparenting.com/articles/2018/11/14170647/chum-chum-recipe_36536251-1024x700.webp',
		['Paneer (Cottage Cheese)','Sugar','Milk','All-Purpose Flour','Cardamom Powder','Pistachios (chopped)'],
		[
			'Knead paneer, sugar, flour into a dough',
			'Shape into elongated cylindrical pieces',
			'Boil in sugar syrup until cooked',
			'Boil milk, add cardamom powder',
			'Dip cooked chum chum in milk',
			'Garnish with chopped pistachios'
		]
	),

	new Meal(
		's6',
		[ 'c7' ],
		'Daal Halwa',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/54477436.cms?imgsize=250221&width=800&height=800',
		['Chana Dal','Ghee','Sugar','Milk','Cardamom Powder','Almonds (sliced)'],
		[
			'Cook chana dal until soft',
			'Mash dal coarsely',
			'Saute in ghee until golden',
			'Add sugar, milk, cardamom',
			'Stir until thickened',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		's7',
		[ 'c7' ],
		'Gajar Barfi',
		'affordable',
		'simple',
		'https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/carrot-burfi-recipe-1-500x500.jpg',
		['Carrots','Khoya','Suagr','Ghee','Cardamom Powder','Almonds (sliced)'],
		[
			'Grate carrots',
			'Cook with khoya, sugar, ghee',
			'Add cardamom, cook until thick',
			'Spread in a greased tray',
			'Garnish with chopped almonds',
			'Allow it to cool, then cut'
		]
	),

	new Meal(
		's8',
		[ 'c7' ],
		'Gulab Jamun',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800',
		['Khoya','Milk Powder','All-Purpose Flour','Suagr','Ghee','Cardamom Powder','Rose Water','Oil(for frying)'],
		[
			'Mix khoya, milk powder, flour, ghee',
			'Add milk, knead into a soft dough',
			'Shape into small balls',
			'Heat oil, fry until golden',
			'Make sugar syrup with water, sugar, cardamom, and rose water',
			'Soak fried gulab jamuns in syrup',
			'Allow them to absorb syrup'
		]
	),

	new Meal(
		's9',
		[ 'c7' ],
		'Jalebi',
		'affordable',
		'simple',
		'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/10/Instant-Jalebi-H1.jpg?fit=600%2C904&ssl=1',
		['All-Purpose Flour','Yogurt','Saffron Strands','Sugar','Water','Lemon Juice','Ghee (for frying)'],
		[
			'Mix flour, yogurt, saffron, and water',
			'Ferment the batter for a few hours',
			'Make a sugar syrup with water, sugar, and lemon juice',
			'Heat ghee for frying',
			'Pipe circles of batter into hot ghee',
			'Fry until golden and crisp',
			'Soak in sugar syrup briefly'
		]
	),

	new Meal(
		's10',
		[ 'c7' ],
		'Kala Jamun',
		'affordable',
		'simple',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2g2Ji5urxZpYK1NlZrNGAOfFa-t0987cdyQ&usqp=CAU',
		['Khoya','Paneer','All-Purpose Flour','Baking Soda','Sugar','Cardamom Powder','Water','Ghee(for frying)'],
		[
			'Mix khoya, paneer, flour, and baking soda',
			'Shape into small balls',
			'Heat ghee, fry until dark brown',
			'Make sugar syrup with water, sugar, and cardamom',
			'Soak fried jamuns in the syrup',
			'Allow them to absorb the syrup'
		]
	),

	new Meal(
		's11',
		[ 'c7' ],
		'Motti Choor laddu',
		'affordable',
		'simple',
		'https://www.cookwithkushi.com/wp-content/uploads/2022/10/best_motichur_laddu_motichoor_ladoo_recipe.jpg',
		['Gram Flour (Besan)',' Powdered Sugar','Cardamom Powder','Water','Ghee','Almond (chopped)'],
		[
			'Roast besan in ghee until aromatic',
			'Add water, sugar, cardamom',
			'Stir until it thickens',
			'Allow it to cool slightly',
			'Shape into laddus',
			'Garnish with chopped almonds'
		]
	),

	new Meal(
		's12',
		[ 'c7' ],
		'Pista Katli',
		'affordable',
		'simple',
		'https://www.mithaiwaalas.com/wp-content/uploads/2020/11/DSC7019-800x600-1.jpg',
		['Pistachios','Sugar','Ghee','Water'],
		[
			'Grind pistachios into a fine powder',
			'Cook sugar in water until a syrup forms',
			'Add ground pistachios, stir in ghee',
			'Cook until it forms a thick consistency',
			'Spread in a greased tray',
			'Allow it to cool, then cut into diamonds'
		]
	),

	new Meal(
		's13',
		[ 'c7' ],
		'Pista Roll',
		'affordable',
		'simple',
		'https://rahatbakerislamabad.com/wp-content/uploads/2022/11/Pista-Roll.jpg',
		['Pistachios','Sugar','Milk Powder','Ghee','Cardamom Powder','Green Food Color (optional)'],
		[
			'Grind pistachios into a fine powder',
			'Cook sugar, milk powder, ghee, cardamom',
			'Add ground pistachios, stir well',
			'Cook until it forms a thick consistency',
			'Add green food color if desired',
			'Roll into a cylindrical shape',
			'Chill, slice into rounds'
		]
	),

	new Meal(
		's14',
		[ 'c7' ],
		'Rasgulla',
		'affordable',
		'simple',
		'https://static.toiimg.com/thumb/52743612.cms?imgsize=134181&width=800&height=800',
		['Paneer','Sugar','Cardamom Pods','Water'],
		[
			'Knead paneer into a soft dough',
			'Shape into small balls',
			'Boil in sugar syrup with cardamom',
			'Cook until rasgullas are spongy',
			'Serve chilled in sugar syrup'
		]
	),

	new Meal(
		's15',
		[ 'c7' ],
		'Rasmalai',
		'affordable',
		'simple',
		'https://www.spiceupthecurry.com/wp-content/uploads/2020/08/rasmalai-recipe-1.jpg',
		['Paneer','Milk','Sugar','Cardamom Pods','Saffron Strands','Almonds(sliced)'],
		[
			'Knead paneer into soft discs',
			'Boil in sugar-infused milk',
			'Add cardamom, saffron, sliced almonds',
			'Simmer until discs soak flavors',
			'Chill before serving'
		]
	),

	new Meal(
		's16',
		[ 'c7' ],
		'Sohn halwa',
		'affordable',
		'simple',
		'https://ahmadsohanhalwa.com.pk/wp-content/uploads/2022/12/maxresdefault-2.jpg',
		['Semolina','Ghee','Sugar','Water','Cardamom Pods','Almonds(chopped)'],
		[
			'Roast semolina in ghee until golden',
			'Add sugar, water, cardamom',
			'Cook until it thickens',
			'Mix in chopped almonds',
			'Allow it to cool',
			'Cut into squares'
		]
	),

	new Meal(
		's17',
		[ 'c7' ],
		'Special Pan Peda',
		'affordable',
		'simple',
		'https://bansiwala.co.in/cdn/shop/files/1_ee44cf86-7f73-4a90-a811-fa9de2f7b311.png?v=1698482906',
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p1',
		[ 'c8' ],
		'Chicken Tikka',
		'affordable',
		'simple',
		'data:image/jpeg;base64,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',
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p2',
		[ 'c8' ],
		'Fajita',
		'affordable',
		'simple',
		'https://zafarullahsweets.pk/cdn/shop/products/ChickenFajitaPizza_1024x1024_crop_center.jpg?v=1643582830',
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p3',
		[ 'c8' ],
		'BBQ Chicken',
		'affordable',
		'simple',
		'https://s23209.pcdn.co/wp-content/uploads/2021/10/BBQ-Chicken-PizzaIMG_0027-760x1140.jpg',
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p4',
		[ 'c8' ],
		'Margherita',
		'affordable',
		'simple',
		'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800',
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p5',
		[ 'c8' ],
		'Pepperoni',
		'affordable',
		'simple',
		'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg'
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p6',
		[ 'c8' ],
		'Spicy Beef',
		'affordable',
		'simple',
		'https://embed.widencdn.net/img/beef/pz4eba64j5/exact/beef-pepper-and-onion-pizza-horizontal.tif?keep=c&u=7fueml',
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p7',
		[ 'c8' ],
		'Hawaiian',
		'affordable',
		'simple',
		'https://thecozycook.com/wp-content/uploads/2023/10/Hawaiian-Pizza-f.jpg',
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),

	new Meal(
		'p8',
		[ 'c8' ],
		'Vege Pizza',
		'affordable',
		'simple',
		'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
		['Condensed Milk','Milk Powder','Ghee','Green Cardamom Powder','Almonds (sliced)'],
		[
			'Mix condensed milk, milk powder, and ghee',
			'Cook on low heat until it thickens',
			'Add cardamom powder and mix well',
			'Allow the mixture to cool slightly',
			'Shape into small round pedas',
			'Garnish with sliced almonds'
		]
	),
];
