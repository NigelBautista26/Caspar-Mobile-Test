Important End 2 End Test Scenarios:

Sample BDD Test cases for three important scenarios that I think is important for the users…

# Start an exercise…

Given: The user navigates to his/her training section within the app
When: The user lands on the exercise information section		
Then: Check the tools you’ll need message is displayed	
And: Check that the user can see the suggested sets title	
And: Check that the user can see the suggested reps title
And: Check that the user can see the suggested tools title
And: Check that the exercise name title includes a #
When: The user starts the training program		
Then: The user should see the get ready message


# Pause an exercise…

Given: The user navigates to his/her training section within the app
When: The user lands on the exercise information section		
Then: Check the tools you’ll need message is displayed	
And: Check that the user can see the suggested sets title	
And: Check that the user can see the suggested reps title
And: Check that the user can see the suggested tools title
And: Check that the exercise name title includes a #
When: The user starts the training program		
Then: The user should see the get ready message
When: The user lands on the exercise session
And: Chooses to pause the exercise session
Then: The video should stop and the start button appears instead of pause


# Skip an exercise…

Given: The user navigates to his/her training section within the app
When: The user lands on the exercise information section		
Then: Check the tools you’ll need message is displayed	
And: Check that the user can see the suggested sets title	
And: Check that the user can see the suggested reps title
And: Check that the user can see the suggested tools title
And: Check that the exercise name title includes a #
When: The user skips the exercise
Then:  a pop up message asking the user if he/or she is sure to skip the exercise should appear


# Sink Wearables…

Given: The user logs in the app
When: The user lands on the dashboard		
Then: Check the my training section tab is displayed	
And: Check the knowledge section tab is displayed	
And: Check the wellbeing section tab is displayed
When: The user navigates to the steps section to try to sync a wearable device 
Then: The user should be redirected to the device list section
And: The user should see the list of devices