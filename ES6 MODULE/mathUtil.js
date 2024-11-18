//To import the below fuc / var/classess we need to prefix export to import the content to other files


export const PI=3.14159

export function getCircum(radius)
{
    return 2* PI*  radius
}

export function getArea(radius){
    return PI*radius*radius
}
export function getVolume(radius){
    return 4*PI*radius*radius
}