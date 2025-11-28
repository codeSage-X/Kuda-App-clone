import React, { ReactNode } from "react";
import { Pressable } from "react-native";
import CustomText from "../general/CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";

interface IProps {
  onPress: any;
  label: string;
  isLoading?: boolean;
  width: number | string;
  height?: number | string;
  isDisabled?: boolean;
  disabledColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  icon?: ReactNode;
  textColor?: string;
}

export const RoundedButton = ({
  onPress,
  label,
  isLoading,
  width = "100%",
  height = 44,
  isDisabled = false,
  disabledColor = 'lightGrey',
  backgroundColor = '#2D66DD',
  textColor = 'white',
  borderRadius = 10,
  icon,
}: IProps) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Pressable
        onPress={() => !isLoading && onPress()}
        style={{
          width: width as any,
          height: height as any,
          backgroundColor: isDisabled ? disabledColor: backgroundColor,
          borderRadius,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'row'
        }}
      >
        { icon && icon }
        <CustomText
          variant={'medium'}
          marginLeft={icon ? 'sm':'xs'}
          fontSize={14}
          style={{
            color: textColor
          }}
        >
          {isLoading ? "submitting..." : label}
        </CustomText>
      </Pressable>
    </>
  );
};
