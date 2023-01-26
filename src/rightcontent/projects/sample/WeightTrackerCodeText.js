// An efficient way to keep code formatting when asked for the code block
const myText = `class Person:
    def __init__(self,name:str,surname:str)->None:
        self.weight_measurements=[]
        self.current_weight=self.weight_measurements[-1]
        self.height_measurements=[]
        self.current_height=self.height_measurements[-1]

    def add_weight(self,weight:float):
        # Add weight in cm
        self.weight_measurements.append(weight)

    def add_height(self,height:float):
        # Add height in cm
        self.height_measurements.append(height)

    def calculate_bmi(self)->float:
        # Calculate BMI
        self.bmi=self.current_weight/(self.current_height**2)
        return self.bmi
    
    def __str__(self)->str:
        return f"Name: {self.name} Surname: {self.surname} \
        Weight: {self.current_weight} Height: {self.current_height} \
        BMI: {self.calculate_bmi()}"


class Food:
    def __init__(self,name:str,calories_per_unit:float,unit:str='g') -> None:
        self.name=name
        self.unit=unit
        self.calories_per_unit=calories_per_unit
        
    def __str__(self) -> str:
        return f"Food: {self.name} Calories: {self.calories_per_unit} per {self.unit} "


class Meal:
    def __init__(self,name:str,foods:list[Food]) -> None:
        self.name=name
        self.total_calories=0
        for food in foods:
            self.total_calories+=food.calories_per_unit

    def __str__(self) -> str:
        return f"Meal: {self.name} Total Calories: {self.total_calories}"


class Exercise:
    def __init__(self,name:str,calories_per_unit:float,unit:str='min') -> None:
        self.name=name
        self.unit=unit
        self.calories_per_unit=calories_per_unit

    def __str__(self) -> str:
        return f"Exercise: {self.name} Calories: {self.calories_per_unit} per {self.unit} "


class Workout:
    def __init__(self,name:str,exercises:list[Exercise]) -> None:
        self.name=name
        self.total_calories=0
        for exercise in exercises:
            self.total_calories+=exercise.calories_per_unit

    def __str__(self) -> str:
        return f"Workout: {self.name} Total Calories: {self.total_calories}"


class DailyCalories:
    def __init__(self,person:Person,date) -> None:
        self.person=person
        self.meals=[]
        self.workouts=[]
        self.calory_intake=0
        self.calory_burn=0
        self.daily_calories=self.calory_intake-self.calory_burn

    def __str__(self) -> str:
        return f"Daily Calories: {self.daily_calories} \
        Meal Calories: {self.meal.total_calories} \
        Workout Calories: {self.workout.total_calories}"

    def add_meal(self,meal:Meal):
        self.meals.append(meal)

    def add_workout(self,workout:Workout):
        self.workouts.append(workout)
    
    def calculate_calory_intake(self)->float:
        for meal in self.meals:
            self.calory_intake+=meal.total_calories
        return self.calory_intake
    
    def calculate_calory_burn(self)->float:
        for workout in self.workouts:
            self.calory_burn+=workout.total_calories
        return self.calory_burn

    def calculate_total_calories(self)->float:
        self.daily_calories=self.calculate_calory_intake()
        -self.calculate_calory_burn()
        return self.daily_calories

`;

export default myText;
