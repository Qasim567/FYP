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
		['Cream Cheese','Sugar','Eggs','Sour Cream','Vanilla Extract','Flour,Butter (for crust)',
			'Graham Crackers (for crust)'],
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
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
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
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca14',
		[ 'c1' ],
		'Choclate Caramel Cake',
		'affordable',
		'simple',
		'https://recipes.net/wp-content/uploads/2020/03/Salted-Caramel-Chocolate-Layer-Cake.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca15',
		[ 'c1' ],
		'Choclate Mousse Cake',
		'affordable',
		'simple',
		'https://vjcooks.com/wp-content/uploads/2021/07/Vjcooks_chocmoussecake13.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca16',
		[ 'c1' ],
		'Cup Cake',
		'affordable',
		'simple',
		'https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca17',
		[ 'c1' ],
		'Fruit Cake',
		'affordable',
		'simple',
		'https://hips.hearstapps.com/hmg-prod/images/fruit-cake-recipe-1630084221.jpg?crop=0.675xw:1.00xh;0.137xw,0&resize=1200:*',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),
	
	new Meal(
		'ca19',
		[ 'c1' ],
		'Icecream Cake',
		'affordable',
		'simple',
		'https://d2sbytayo4rkgk.cloudfront.net/eyJidWNrZXQiOiJwcm9kLWZlcmd1c29ucGxhcnJlLWFzc2V0cyIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9mL2wvZmxvdXJsZXNzLWljZS1jcmVhbS1iaXJ0aGRheS1jYWtlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca20',
		[ 'c1' ],
		'Layer Cake',
		'affordable',
		'simple',
		'https://assets.bonappetit.com/photos/57acf4a41b33404414975396/1:1/w_4096,h_4096,c_limit/Staged_Cakes_Birthday_High_2.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca21',
		[ 'c1' ],
		'Lemon Cake',
		'affordable',
		'simple',
		'https://preppykitchen.com/wp-content/uploads/2022/06/Lemon-Cake-Recipe.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca22',
		[ 'c1' ],
		'Marble Cake',
		'affordable',
		'simple',
		'https://schoolnightvegan.com/wp-content/uploads/2022/10/vegan-marble-cake-23.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca23',
		[ 'c1' ],
		'PineApple Cake',
		'affordable',
		'simple',
		'https://newtownbakers.pk/wp-content/uploads/2020/12/1p_pineapple-min.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca24',
		[ 'c1' ],
		'Pistachio Cake',
		'affordable',
		'simple',
		'https://sugarspunrun.com/wp-content/uploads/2023/08/Pistachio-Cake-1-of-1.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca25',
		[ 'c1' ],
		'Plain Cake',
		'affordable',
		'simple',
		'https://img.taste.com.au/BYEcPquu/taste/2010/01/easy-vanilla-butter-cake_1980x1320-118393-1.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca26',
		[ 'c1' ],
		'Stawbery Cake',
		'affordable',
		'simple',
		'https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card-500x500.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca27',
		[ 'c1' ],
		'Vanilla Cake',
		'affordable',
		'simple',
		'https://chatelaine.com/wp-content/uploads/2023/09/vanilla-yellow-layer-cake-recipe-960.jpg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca28',
		[ 'c1' ],
		'Whipped Choclate Cake',
		'affordable',
		'simple',
		'https://www.marthastewart.com/thmb/qYuuiq6bl00ge9kpqRHP5OSmANA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/med104694_0509_choc_cake_vert-b112e79dc6c04cc38439f9fc020ea4c3.jpgitokrk_3uYdK',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
		]
	),

	new Meal(
		'ca29',
		[ 'c1' ],
		'White Angle Cream Cake',
		'affordable',
		'simple',
		'https://img.taste.com.au/F32qj9kj/w1200-h630-cfill/taste/2016/11/white-christmas-angel-cake-with-rose-and-prosecco-syrup-106299-1.jpeg',
		[
			'Arugula',
			"Lamb's Lettuce",
			'Parsley',
			'Fennel',
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper'
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dessing',
			'Prepare the salad',
			'Add salmon cubes and dressing'
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
