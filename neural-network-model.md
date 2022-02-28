# Neural Network Model
Since neural networks are effective at modeling non-linear and complex relationships, we attempted to employ one for our salary-prediction project. 

## Data Prep
---
The dataset used is contained in the file `pitcher_salaries_cleaned.csv`. Details of how this dataset was preprocessed can be found [here](https://github.com/Jenny16x/TeamSix#data-preprocessing).

### Reduction of Features
In addition to the initial preprocessing of the data, less significant features (as determined by previous [random forest analysis](https://github.com/Jenny16x/TeamSix#random-forest-analysis)) were dropped from the dataframe to avoid confusing the neural network model. The final features included in the model were `ERA`, `Hits`, `Strike Outs`, `Outs Pitched`, `Batters Faced by Pitcher`, `Games Finished`, `Games Started`, and `Salary`.

## Naming Feature & Target Variables
---
The `Salary` column values were set as the target output, and the values from all other columns were set as the features. 

## Splitting Training & Testing Sets
--- 
The training and testing sets were split using the `train_test_split()` method from Scikit-learn.

## Standardization of Features
---
The features were standardized using `StandardScaler()`.

## Building the Neural Network Framework
---
