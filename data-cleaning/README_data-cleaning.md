# TeamSix

## Data Cleaning Process Explained

To better analyze the pitcher salary data, we needed to first combine and clean the data files we had. In order to attain all of the neccessary information for the analysis, we used three seperate CSV files - 1) Salaries 2) People & 3) Pitchers. The "Salaries.csv" file contained salary data for all players in the league, while the "Peoples.csv" containted their names and personal information, and the "Pitchers.csv" file contained stats for the pitchers. 

The first step in cleaning the data was combining the Salaries.csv and Pitcher.csv by merging the dataframes on the 'Player ID' by using PANDAS. The next step was to filter by the years we wanted. For this analysis, we decided to use years 1990 - 2019, approzimately 30 years of data. This ensured that we would have enough quality data point. Next, the data was further filtered by the number of games started. To eliminate outliers and filter by only starting pitchers, we required a minimum of at least 3 games started. This essentially filtered out any closing pitchers or players who may have been called up briefly from the minor leagues. 

Next, the data had to be cleaned after being filtered. The first step in this process was to filter out any null values in the Salary column since these data points would be of no help. After this, a handful of columns were dropped because the stats they provided were either empty values or simply not relevant for this analysis. 

After this, the dataframe was combined with the "Players.csv" containing personal information. The purpose of linking the file was primarily to get the player names linked as well as some other stat such as height, weight, etc. The files were merged on the 'Player ID" using PANDAS. Once the names were linked, the data was further cleaned by changing the column acronyms to their full names for readability. Unfortuantely, player age was not provided but we felt like this was an important data point to have. To attain the player age, we created a new column by subtracting the 'Year" column from the "Year Born". This effectively gave us the player age for each data point. 

With the dataframe effectively filtered and cleaned, the final steps were to organize the columns in a way that made sense and export the file as "pitcher_salaries_cleaned.csv". 
