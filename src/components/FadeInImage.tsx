/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { Loading } from './Loading';


interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
        setIsLoading(false);
        console.log(err);
    };

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>

            {
                isLoading &&
                <Loading />
            }

            <Animated.Image
                source={{ uri }}
                onError={onError}
                onLoad={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />

        </View>
    );
};
