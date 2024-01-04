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
];
