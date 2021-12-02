num = 2352; 
#this is our example input. it is an intager aka an amount of something\
arr = []; 
#this is an empty array (list of things) that we are going to change later on
num = str(num); 
#this changes the num from an intager to a string aka a list of characters = "2352"
i = 0; 
#this is what loop that we're currently on
while(i < len(num)): 
    #this loops through all of the string's characters once and each time executes the code bellow 

    specific_char = num[i] 
    #this gets a specific character from the string = "2" or "3" or "5" or "2" ect

    specific_num = int(specific_char)
    #this turns the specific string back into an intager = 2 or 3 or 5 or 2 ect

    arr.append(specific_num) 
    #this places the specific string into the empty array at the beginning of the code = [2] then [2, 3] then [2, 3, 5] then [2, 3, 5, 2] ect

    i+=1; 
    #this makes it loop through again until its looped through 4 times

print(arr); 
#now that the loop has all of the intagers pushed to it, we can log it to the console, basically showing the output that we got
