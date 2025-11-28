import React from "react";
import { Pressable } from "react-native";
import CustomText from "./CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";

interface IProps {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  width: number | string;
  height?: number | string;
  isDisabled?: boolean;
}

export const OutlineButtonColored = ({
  onPress,
  label,
  isLoading,
  width = "100%",
  height = 44,
  isDisabled = false
}: IProps) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Pressable
        onPress={() => !isLoading && onPress()}
        style={{
          width: width as any,
          height: height as any,
          backgroundColor:
           '#EAF1FE',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#A0BDF9',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText
          variant="subheader"
          fontSize={14}
          style={{color:'#2350AD'}}
        >
          {isLoading ? "submitting..." : label}
        </CustomText>
      </Pressable>
    </>
  );
};
