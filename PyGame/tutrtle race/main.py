import turtle
from random import randint

print("Place your bet on turtles, red blue green orange:")
bet=input("Choose any one: ")
times=int(input("Number of Times You want to compete: "))
s=int(input("Press 1 to Start the Race: "))
score=0
window=turtle.Screen()
window.title("Turtle Race")
turtle.bgcolor("forestgreen")
while(times>0):
    if(s==1):
        turtle.speed(0)
        turtle.penup()
        turtle.goto(-140, 140)

        for step in range(15):
            turtle.write(step, align='center')
            turtle.right(90)
            for num in range(8):
                turtle.penup()
                turtle.forward(10)
                turtle.pendown()
                turtle.forward(10)
            turtle.penup()
            turtle.backward(160)
            turtle.left(90)
            turtle.forward(20)

        red = turtle.Turtle()
        red.color('red')
        red.shape('turtle')
        red.penup()
        red.goto(-160, 100)
        for turn in range(10):
            red.right(36)

        blue = turtle.Turtle()
        blue.color('blue')
        blue.shape('turtle')
        blue.penup()
        blue.goto(-160, 70)
        for turn in range(72):
            blue.left(5)

        black = turtle.Turtle()
        black.shape('turtle')
        black.color('black')
        black.penup()
        black.goto(-160, 40)
        for turn in range(60):
            black.right(6)

        orange = turtle.Turtle()
        orange.shape('turtle')
        orange.color('orange')
        orange.penup()
        orange.goto(-160, 10)
        for turn in range(30):
            orange.left(12)

        winnerred=0
        winnerblue=0
        winneblack=0
        winnerorange=0

        redTotal=0
        blueTotal=0
        blackTotal=0
        orangeTotal=0

        for turn in range(50):
            winnerred=randint(1,10);
            red.forward(winnerred)

            winnerblue=randint(1,10)
            blue.forward(winnerblue)

            winneblack=randint(1,10)
            black.forward(winneblack)

            winnerorange=randint(1,10)
            orange.forward(winnerorange)

            redTotal=redTotal+winnerred
            blueTotal=blueTotal+winnerblue
            blackTotal=blackTotal+winneblack
            orangeTotal=orangeTotal+winnerorange

            # print(winnerred,winnerblue,winneblack,winnerorange)
            # print(redTotal,blueTotal,blackTotal,orangeTotal)
            # a=int(input())
        winner=""
        if(redTotal>=blueTotal and redTotal>=blackTotal and redTotal>=orangeTotal):
            winner="red"
        elif (blueTotal>=redTotal and blueTotal>=blackTotal and blueTotal>=orangeTotal):
            winner="blue"
        elif (blackTotal>=redTotal and blackTotal>=blueTotal and blackTotal>=orangeTotal):
            winner="green"
        elif (orangeTotal>=redTotal and orangeTotal>=blackTotal and orangeTotal>=blueTotal):
            winner="orange"
        if(bet==winner):
            print("Congratulation! You Win")
            score=score+1
        else:
            print("Sorry! You Loose")
        
    else:
        exit()
    times=times-1
    turtle.clear()
    red.ht()
    blue.ht()
    black.ht()
    orange.ht()
    
print("Total Score: ",score)    