import {
    TextInputProps,
    TextInput,
    StyleSheet,
    Alert,
    ViewStyle,
  } from "react-native";
  import { Controller, useFormContext } from "react-hook-form";
  import React from "react";
  import { useTheme } from "@shopify/restyle";
  import { Theme } from "../../theme";
  import Box from "../general/Box";
  import CustomText from "../general/CustomText";
  import { Ionicons } from "@expo/vector-icons";
  
  
  interface IProps {
    required?: boolean;
    name: string;
    placeholder: string;
    isPassword?: boolean;
    containerStyle?: ViewStyle;
    label?: string;
    showLabel?: boolean;
    removeSpecialCharater?: boolean;
    removeSpaces?: boolean;
  }
  
  export const RoundedInput = (props: IProps & TextInputProps) => {
    const [focused, setFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(true);
    const theme = useTheme<Theme>();
  
    // form context
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <Box style={{ ...props.containerStyle }}>
        {props.showLabel ||
          (props.showLabel === undefined && (
            <Box flexDirection="row">
              <CustomText variant="xs"  marginBottom="sm">
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
            const handleInputChange = (text: string) => {
              // Remove special characters using a regular expression
              const filteredText = text.replace(/[^\w\s]/gi, "");
  
              //remove all spaces
              const newText = props.removeSpaces
                ? filteredText.replace(/\s/g, "_")
                : filteredText;
              onChange(newText);
            };
            return (
              <Box
                style={[
                  Style.parent,
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
                <Box
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  {/* {focused && <Text variant='xs'>{props.placeholder || props.name}</Text>} */}
                  <TextInput
                    {...props}
                    placeholderTextColor={theme.colors.textColor}
                    cursorColor={theme.colors.textColor}
                    placeholder={!focused ? props.placeholder || props.name : ""}
                    value={value}
                    onChangeText={(e) => {
                      props.removeSpecialCharater
                        ? handleInputChange(e)
                        : onChange(e);
                    }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    secureTextEntry={props.isPassword ? showPassword : false}
                    style={{
                      color: theme.colors.textColor,
                      fontFamily: "BasierRegular",
                    }}
                  />
                </Box>
                {props.isPassword && (
                  <Ionicons
                    onPress={() => setShowPassword((prev) => !prev)}
                    name={showPassword ? "happy-outline" : "happy"}
                    size={25}
                    color={'#2D66DD'}
                  />
                )}
              </Box>
            );
          }}
        />
        {errors[props.name] && (
          <CustomText variant="xs" fontSize={8} style={{ color: "red" }}>
            {errors[props.name]?.message as any}
          </CustomText>
        )}
      </Box>
    );
  };
  
  const Style = StyleSheet.create({
    parent: {
      width: "100%",
      height: 40,
      borderRadius: 16,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 5,
    },
    textInput: {
      width: "100%",
    },
  });
  
  // export CustomTextInput
  