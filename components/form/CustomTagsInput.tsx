import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle, TextInputProps } from 'react-native';
import theme from "../../theme";
import { Controller, useFormContext } from "react-hook-form";

interface IProps {
  required?: boolean;
  name: string;
  placeholder: string;
  containerStyle?: ViewStyle;
  label?: string;
  showLabel?: boolean;
  removeSpecialCharater?: boolean;
  removeSpaces?: boolean;
  selectedTags: any;
  tags:any;
  setTags:any
}

const CustomTagsInput = (props: IProps & TextInputProps) => {
  // const [tag,setTags] = useState<any>([]);
  const [tagText, setTagText] = useState('');
  const [focused, setFocused] = React.useState(false);

  
  const removeTag = (indexToRemove:any) => {
    const newTags = props.tags.filter((_: any, index: any) => index !== indexToRemove);
    props.setTags(newTags);
    props.selectedTags(newTags);
  };

  const addTag = () => {
    if (tagText.trim() !== '') {
      const newTags = [...props.tags, tagText.trim()];
      props.setTags(newTags);
      setTagText('');
      props.selectedTags(newTags);
    }
  };

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box style={{ ...props.containerStyle }}>
       {props.showLabel ||
          (props.showLabel === undefined && (
            <Box flexDirection="row" style={{marginBottom:-10}}>
              <CustomText variant="xs"  marginBottom="xs">
                {props.label || props.placeholder}
              </CustomText>
              {props.required && (
                <CustomText style={{ color: "red" }}>*</CustomText>
              )}
            </Box>
          ))}
          <Controller
          control={control}
          rules={{
            required: props.required || false,
          }}
          name={props.name}
          render={({ field: { onChange, value }, formState: { isValid } }) => {

            return (
              <>
              <Box
                 width={'100%'} flexDirection={'column'} alignItems={'flex-start'} flexWrap={'wrap'} borderWidth={1} 
                 borderRadius={12} marginVertical={'xl'}
                style={[
                  // Style.parent,
                  {
                    borderColor:
                      focused && !errors[props.name]
                        ? theme.colors.primaryColor
                        : errors[props.name]
                        ? 'red'
                        : theme.colors.textInputBorderColor,
                  },
                ]}
              >
                
                
                <Box flexDirection={'row'} flexWrap={'wrap'} margin={'sm'} position={'relative'}>
                    {props.tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> |
                     Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                      <TouchableOpacity key={index} onPress={() => removeTag(index)} style={styles.tag}>
                        <CustomText  variant={'xs'} marginRight={'xs'}>{tag}</CustomText>
                        <Ionicons name='close-outline' color={'#d6d8da'} size={20}/>
                      </TouchableOpacity>
                    ))}
                </Box>
                <Box width={'100%'} alignItems={'center'}justifyContent={'center'}>
                  <TextInput
                   {...props}
                    placeholderTextColor={theme.colors.textColor}
                    cursorColor={theme.colors.textColor}
                    placeholder={!focused ? props.placeholder || props.name : ""}
                    value={tagText}
                    onChangeText={setTagText}
                    onSubmitEditing={addTag}
                    // onChangeText={(e) => handleChange(e)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                      color: theme.colors.textColor,
                      fontFamily: "BasierRegular",
                      flex: 1,
                      height: 30,
                      width: '90%',
                      fontSize: 14,
                      padding: 4,
                      paddingBottom:10,
                      // ...(tags ? { padding:4 } : { padding: 4, })
                    }}
                  />
                </Box>
              </Box>
              </>
            );
          }}
        />
          {errors[props.name] && (
          <CustomText variant="xs" fontSize={10} marginTop={'xs'} style={{ color: "red" }}>
            {errors[props.name]?.message as any}
          </CustomText>
        )}
    </Box>
  );
};

export default CustomTagsInput;

const styles = StyleSheet.create({

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth:1,
    borderColor:'#d6d8da',
    padding: 2,
    marginLeft: 2,
  },
  
});




