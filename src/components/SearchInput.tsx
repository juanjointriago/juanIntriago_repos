/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Platform, StyleProp, TextInput, View, ViewStyle } from 'react-native';
import { styleSearchInpup } from '../theme/appTheme';
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}
export const SearchInput = ({ style, onDebounce }: Props) => {
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue(textValue, 900);
    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);

    return (
        <View style={{ ...styleSearchInpup.container, ...style as any }}>
            <View style={styleSearchInpup.textBackground}>
                <TextInput
                    style={{ ...styleSearchInpup.textInput, top: (Platform.OS === 'ios') ? 0 : 2 }}
                    placeholder='Buscar Pokemon' autoCapitalize='none' autoCorrect={false}
                    onChangeText={setTextValue}
                />
            </View>
        </View>
    );
};
