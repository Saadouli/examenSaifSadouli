import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {  Button, Text, View } from 'react-native';
import ButtonImage  from './ButtonImage'
const ButtonImageMeta: ComponentMeta<typeof ButtonImage> = {
    title: 'ButtonImage Component',
    component: ButtonImage,
    argTypes:{

    },
    args: { borderRadius:500,
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8eApRDEdZIiTfTwjiY85OBcQwTQr2ydjLptENja7zvj2tcSsXzG0Cqq8FXqFofZeAcE&usqp=CAU",
        title: <Text  style= {{ fontSize:10}}>{'    '}House</Text>,

    }
}
export default ButtonImageMeta;

type ButtonImageStory = ComponentStory<typeof ButtonImage>
export const Basic : ButtonImageStory = (args) => <ButtonImage {...args} />

export const Story2 : ButtonImageStory = (args) => <ButtonImage {...args} />
export const Story3 : ButtonImageStory = (args) => <ButtonImage {...args} />
Story2.args = {
    ...Basic.args,
    borderRadius:10,
     source: "https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=612x612&w=0&h=zbe_s4g3HxqGPBr2k00mqIiZG2-CzPfvEAgAcWct9pE=",
     title: <Text style= {{ fontSize:10}}>{' '}Mountain</Text>,
    

},
Story3.args = {
    ...Basic.args,
    borderRadius:500,
     source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjE9Tv0TRUJzhAf4HVpbH8nk38XPahjKMXuQ&usqp=CAU",
     title: <Text  style= {{ fontSize:10}}>{'   '}Mount</Text>,
    

}


/*import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {  Button, Text, View } from 'react-native';


import ButtonImage from './ButtonImage';
const ButtonMeta: ComponentMeta<typeof ButtonImage> = {
    title: 'Button Component',
    component: ButtonImage,
    argTypes:{

    },
    args: {
     borderRadius:500,
     source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8eApRDEdZIiTfTwjiY85OBcQwTQr2ydjLptENja7zvj2tcSsXzG0Cqq8FXqFofZeAcE&usqp=CAU",
     title: <Text  style= {{ fontSize:10}}>{'    '}House</Text>,
    }
}
export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>
export const Basic : ButtonImageStory = (args) => <ButtonImage {...args} />
export const Story2 : ButtonStory = (args) => <ButtonImage {...args} />
export const Story3 : ButtonStory = (args) => <ButtonImage {...args} />
Story2.args = {
    ...Basic.args,
    borderRadius:20,
     source: "https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=612x612&w=0&h=zbe_s4g3HxqGPBr2k00mqIiZG2-CzPfvEAgAcWct9pE=",
     title: <Text style= {{ fontSize:10}}>{' '}Mountain</Text>,
    

},
Story3.args = {
    ...Basic.args,
    borderRadius:500,
     source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjE9Tv0TRUJzhAf4HVpbH8nk38XPahjKMXuQ&usqp=CAU",
     title: <Text  style= {{ fontSize:10}}>{'   '}Mount</Text>,
    

}*/