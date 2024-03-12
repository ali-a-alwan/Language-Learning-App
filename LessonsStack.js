// LessonsStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LessonsScreen from './LessonsScreen';
import LessonDetailsScreen from './LessonDetailsScreen';
import ExercisesScreen from './ExercisesScreen';

const Stack = createStackNavigator();

const LessonsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lessons" component={LessonsScreen} />
      <Stack.Screen name="LessonDetails" component={LessonDetailsScreen} />
      <Stack.Screen name="Exercises" component={ExercisesScreen} />
    </Stack.Navigator>
  );
};

export default LessonsStack;