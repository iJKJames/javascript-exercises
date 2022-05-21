The rest operator allows ALL arguments passed to the function to be used. Even an array.
    - No need to pass the array as a seperate arguement.
    1. It can be accessed using via the index number, in this case, args[0]
    Note: This works because the rest operator accepts the full array as the first argument, even though it has multiple elements.
    
    2. With the array defined, create a new array to add the new data to after removing the variable arguments

    3. Loop the array with the forEach() method

    4. Define a rule that ignores elements that are not in the args list

    5. Push the ignored elemets into the new array

    6. Return the new array with the variable args removed