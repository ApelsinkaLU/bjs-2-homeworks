/*jshint esversion: 7 */


// Задание 1

function parseCount(value1) {
    let result = Number.parseInt(value1);

    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }

    return result;
} 

function validateCount(value2) {
    try {
        return parseCount(value2);
    } catch (error) {
        return error;
    }
}


// Задание 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        this.pp = this.getPerimeter()/2;

        this.s = Number(Math.sqrt(this.pp *(this.pp - this.a)*(this.pp - this.b)*(this.pp - this.c)).toFixed(3));
        return this.s;
    } 
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new Object ({
            getArea() {
                return "Ошибка! Треугольник не существует";
            },

            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        });
    }
}