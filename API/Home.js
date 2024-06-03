import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const APP_ID = "1b5d5aea";
  const APP_KEY = "49b002b34a989362ad6d430904b9318e";

  const navigation = useNavigation();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAllergyLabels, setSelectedAllergyLabels] = useState([]);
  const [selectedDietLabels, setSelectedDietLabels] = useState([]);
  const [enteredCalories, setEnteredCalories] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleButtonPress = (recipe) => {
    navigation.navigate("Recipe", { recipeLabel: recipe.label, recipe });
  };

  const getRecipes = async () => {
    try {
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      if (selectedAllergyLabels.length > 0) {
        url += `&health=${selectedAllergyLabels.join("&health=")}`;
      }
      if (selectedDietLabels.length > 0) {
        url += `&diet=${selectedDietLabels.join("&diet=")}`;
      }
      if (enteredCalories) {
        url += `&calories=${enteredCalories}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits || []); // Set recipes to data.hits if defined, otherwise set it to an empty array
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = () => {
    if (!search.trim()) {
      // If search field is empty, show an alert
      alert("Please enter a keyword to search.");
      return;
    }
    setQuery(search);
  };

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleApplyFilters = () => {
    console.log("Selected Allergy Labels:", selectedAllergyLabels);
    console.log("Selected Diet Labels:", selectedDietLabels);
    console.log("Entered Calories:", enteredCalories);
    setModalVisible(false);
    getRecipes();
  };

  const toggleAllergyLabel = (label) => {
    const updatedLabels = selectedAllergyLabels.includes(label)
      ? selectedAllergyLabels.filter((l) => l !== label)
      : [...selectedAllergyLabels, label];
    setSelectedAllergyLabels(updatedLabels);
  };

  const toggleDietLabel = (label) => {
    const updatedLabels = selectedDietLabels.includes(label)
      ? selectedDietLabels.filter((l) => l !== label)
      : [...selectedDietLabels, label];
    setSelectedDietLabels(updatedLabels);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="white"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={handleFilterPress}>
          <Text style={styles.buttonText}>Filters</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.recipesContainer}>
        {search.trim() !== "" && recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Pressable
              key={`${recipe.recipe.label}_${index}`}
              onPress={() => handleButtonPress(recipe.recipe)}
            >
              <View style={styles.recipeContainer}>
                <Image
                  resizeMode="cover"
                  source={{ uri: recipe.recipe.image }}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeTitle}>{recipe.recipe.label}</Text>
                {/* <Text style={styles.recipeDetails}>Calories: {Math.round(recipe.recipe.calories)}</Text>
              <Text style={styles.recipeDetails}>Ingredients:</Text>
              {recipe.recipe.ingredients.map((ingredient, i) => (
                <Text key={i} style={styles.recipeDetails}>{`${ingredient.text}`}</Text>
              ))}
              <Text style={styles.recipeDetails}>Health Labels: {recipe.recipe.healthLabels.join(', ')}</Text>
              <Text style={styles.recipeDetails}>Diet Labels: {recipe.recipe.dietLabels.join(', ')}</Text> */}

              </View>
            </Pressable>
          ))
        ) : (
          <Text style={{ color: "white", textAlign: "center" }}>
            No recipes found.
          </Text>
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>Allergy Labels</Text>
              <View style={styles.modelButtonContainer}>
              {allergyLabels.map((label) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.filterButton,
                    selectedAllergyLabels.includes(label) &&
                      styles.selectedFilterButton,
                  ]}
                  onPress={() => toggleAllergyLabel(label)}
                >
                  <Text style={styles.filterButtonText}>{label}</Text>
                </TouchableOpacity>
              ))}
              </View>
              <Text style={styles.modalTitle}>Diet Labels</Text>
              <View style={styles.modelButtonContainer}>
              {dietLabels.map((label) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.filterButton,
                    selectedDietLabels.includes(label) &&
                      styles.selectedFilterButton,
                  ]}
                  onPress={() => toggleDietLabel(label)}
                >
                  <Text style={styles.filterButtonText}>{label}</Text>
                </TouchableOpacity>
              ))}
              </View>
              {/* <Text style={styles.modalTitle}>Enter Calories Range</Text>
              <TextInput
                style={styles.caloriesInput}
                placeholder="Enter Calories"
                keyboardType="numeric"
                value={enteredCalories}
                onChangeText={setEnteredCalories}
              /> */}
            </ScrollView>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApplyFilters}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#3f2f25",
  },
  searchForm: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    color: "white",
  },
  searchButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  menuButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  recipesContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  recipeContainer: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  recipeDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 50,
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modelButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#F6F6F6",
    borderRadius: 15,
    margin: 4,
  },
  selectedFilterButton: {
    backgroundColor: "#C0C0C0",
  },
  filterButtonText: {
    fontSize: 14,
    color: "#000",
  },
  caloriesInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
  },
  applyButton: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const allergyLabels = [
  "alcohol-cocktail",
  "alcohol-free",
  "celery-free",
  "crustacean-free",
  "dairy-free",
  "DASH",
  "egg-free",
  "fish-free",
  "fodmap-free",
  "gluten-free",
  "immuno-supportive",
  "keto-friendly",
  "kidney-friendly",
  "kosher",
  "low-fat-abs",
  "low-potassium",
  "low-sugar",
  "lupine-free",
  "Mediterranean",
  "mollusk-free",
  "mustard-free",
  "no-oil-added",
  "paleo",
  "peanut-free",
  "pescatarian",
  "pork-free",
  "red-meat-free",
  "sesame-free",
  "shellfish-free",
  "soy-free",
  "sugar-conscious",
  "sulfite-free",
  "tree-nut-free",
  "vegan",
  "vegetarian",
  "wheat-free",
];

const dietLabels = [
  "balanced",
  "high-fiber",
  "high-protein",
  "low-carb",
  "low-fat",
  "low-sodium",
];

export default Home;
