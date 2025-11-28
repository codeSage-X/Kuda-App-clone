import {
    TextInputProps,
    TextInput,
    StyleSheet,
    Alert,
    ViewStyle,
  } from "react-native";
  import { Controller, useFormContext } from "react-hook-form";
  import React, { useState } from "react";
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
    isSignup?: boolean;
    containerStyle?: ViewStyle;
    label?: string;
    showLabel?: boolean;
    removeSpecialCharater?: boolean;
    removeSpaces?: boolean;
  }
  
  export const CustomTextInput = (props: IProps & TextInputProps) => {
    const [focused, setFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(true);
    const [password, setPassword] = React.useState('')
    const [passwordStrength, setPasswordStrength] = useState('')
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

            const handleChange = (text: string) => {
              props.removeSpecialCharater
                ? handleInputChange(text)
                : onChange(text);
              if (props.isPassword) {
                setPassword(text);
                console.log(text); // Log password input value
                // Check for special characters, numbers, and uppercase letters
                  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);
                  const hasNumber = /[0-9]/.test(text);
                  const hasUpperCase = /[A-Z]/.test(text);

                  if (hasSpecialChar && hasNumber && hasUpperCase) {
                    setPasswordStrength('strong');
                    console.log('strong')
                } else if (text.length >= 6) {
                    setPasswordStrength('medium');
                    console.log('medium')
                } else {
                    setPasswordStrength('weak');
                    console.log('weak')
                }
              }
            };

            

            return (
              <>
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
                    onChangeText={(e) => handleChange(e)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    secureTextEntry={props.isPassword ? showPassword : false}
                    
                    
                  />
                  
                </Box>
                {props.isPassword && (
                  <Ionicons
                    onPress={() => setShowPassword((prev) => !prev)}
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={25}
                    color={theme.colors.textColor}
                  />
                )}
              </Box>
              <Box>
                
                {/* <CustomText>{password}</CustomText> */}
                {props.isSignup && (
                  <>
                  {
                    passwordStrength === 'weak'?
                    <>
                      <CustomText variant={'xs'} marginTop={'sm'} >Password must be atleast 6 characters</CustomText>
                      <Box height={5} width={'100%'} marginTop={'sm'}  flexDirection={'row'} justifyContent={'flex-start'} >
                        <Box height={8} width={'30%'} backgroundColor={'textInputBorderColor'} borderRadius={10}>
                          <Box height={8} width={'30%'} backgroundColor={'errorColor'} borderRadius={10}>
                        </Box>
                      </Box>
                      </Box>
                    </> 
                    : 
                    passwordStrength === 'medium'?
                    <>
                    <CustomText variant={'xs'} marginTop={'sm'} >Password should have a number, uppercase, lowercase and a special character </CustomText>
                     <Box height={5} width={'100%'} marginTop={'sm'}  flexDirection={'row'} justifyContent={'flex-start'} >
                        <Box height={8} width={'30%'} backgroundColor={'textInputBorderColor'} borderRadius={10}>
                        <Box height={8} width={'50%'} backgroundColor={'warningColor'} borderRadius={10}></Box>
                        </Box>
                    </Box>
                    </> 
                     : 
                     passwordStrength === "strong"? 
                     <>
                     <CustomText variant={'xs'} marginTop={'sm'} >Password is Strong </CustomText>
                      <Box height={5} width={'100%'} marginTop={'sm'}  flexDirection={'row'} justifyContent={'flex-start'} >
                        <Box height={8} width={'30%'} backgroundColor={'textInputBorderColor'} borderRadius={10}>
                          <Box height={8} width={'100%'} backgroundColor={'successColor'} borderRadius={10}>
                        </Box>
                        </Box>
                      </Box>
                     </>
                     : null
                  }      
                  </>
                )}
                 
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
  const Style = StyleSheet.create({
    parent: {
      width: "100%",
      height: 45,
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    textInput: {
      width: "100%",
      marginBottom: 10,
    },
  });
  
  // export CustomTextInput
  