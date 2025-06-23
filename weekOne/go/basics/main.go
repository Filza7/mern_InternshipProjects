package main

import "fmt"

func main() {
	var a, b int
	fmt.Print("enter the first number=")
	fmt.Scanln(&a)

	fmt.Print("enter the second number=")
	fmt.Scanln(&b)

	a,b=swap(a,b)
	fmt.Println("the value of number1=", a)
	fmt.Println("the value of number2=", b)
}