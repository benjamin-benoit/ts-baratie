export enum DishType {
    Takoyaki = 1 ,
    Katsudon = 2 ,
    Udon = 4 ,
    Ramen = 8,
    MatchaCookie = 16
};
 
export enum Dishsize {
    S = 1 ,
    M = 2 ,
    L = 4 ,
    XL = 8 ,
    XXL = 16
};
 
export enum CommandRegex {
   type = '[a-zA-Z]+',
   size = '[a-zA-Z]+',
   number  = '[0-9]+'
};

interface Recipe {
    name: string;
    bakingTime: number;
    ingredients: string[];
}
 
  
export const recipes: Recipe[] = [
    {
        name: 'Takoyaki',
        bakingTime: 1,
        ingredients: ['octopus', 'soja sauce']
    },
    {
        name: 'Katsudon',
        bakingTime: 2,
        ingredients: ['rice', 'pork', 'eggs']
    },
    {
        name: 'Udon',
        bakingTime: 2,
        ingredients: ['noodle', 'pork', 'eggs']
    },
    {
        name: 'Ramen',
        bakingTime: 2,
        ingredients: ['noodle', 'chicken', 'eggs']
    },
    {
        name: 'MatchaCookie',
        bakingTime: 4,
        ingredients: ['dough', 'matcha', 'chocolate', 'chief love']
    }
]
