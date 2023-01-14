import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardFood from './CardFood';
import { Button, Text, View } from 'react-native';
const CardFoodMeta: ComponentMeta<typeof CardFood> = {
  title: 'CardFood Component', /* titre du compsant dans storybook*/ 
  component: CardFood,
  argTypes: {},
  args: {
    title: <Text style={{ color: 'red' }}> test </Text>,
    price: <Text style={{ color: 'gray' }}> test </Text>,
  },
};
export default CardFoodMeta;
type CardFoodStory = ComponentStory<typeof CardFood>;
export const Basic: CardFoodStory = (args) => <CardFood {...args} />;/*story1* nommé basique*/
export const CardType2: CardFoodStory = (args) => <CardFood {...args} />; /*story2 cardtype2*/

CardType2.args = {
  ...Basic.args,
  title: <Text style={{ color: 'black' }}> test </Text>,
  description: <Text style={{ color: 'black' }}> test </Text>,
  price: (
    <View>
      <Text style={{ color: 'black' }}> test </Text>
      <Button title="test" />
    </View>
  ),
};
















/*import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardControl  from './CardControl'
import SliderMusic from '../SliderMusic/SliderMusic';
const CardControlMeta: ComponentMeta<typeof CardControl> = {
    title: 'CardControl Component',
    component: CardControl,
    argTypes:{

    },
    args: {

        durationMusic : 1,
        slider : <SliderMusic duration={77} durationMax={100} setDuration={(duration) => console.log("## parrent ##  slider musique stories", duration)}/>

    }
}
export default CardControlMeta;

type CardControlStory = ComponentStory<typeof CardControl>
export const Basic : CardControlStory = (args) => <CardControl {...args} />*/