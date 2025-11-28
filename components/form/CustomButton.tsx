import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Pressable } from "react-native";
import CustomText from "../general/CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";

interface IProps {
  onSubmit: (data: any) => void; 
  label: string;
  isLoading?: boolean;
  width: number | string;
}

export const SubmitButton = ({
  onSubmit,
  label,
  isLoading,
  width = "100%",
}: IProps) => {
  const {
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useFormContext();
  const theme = useTheme<Theme>();

  // const onSubmit = ({onSubmit}:any) => {
  //   // Perform any additional actions or call another submit function here
  //   // console.log("Form data:", data);
  //   console.log('form')
  // };

  //disabled={!isDirty || !isValid  ? true: false}

  return (
    <>
      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          width: width as any,
          height: 44,
          backgroundColor:
            !isDirty || !isValid ? theme.colors.disabledButtonColor : theme.colors.primaryColor,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText
          variant="subheader"
          style={{
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          {isLoading ? "submitting..." : label}
        </CustomText>
      </Pressable>
    </>
  );
};
