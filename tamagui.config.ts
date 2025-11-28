import { config } from '@tamagui/config/v2-native'
import { createTamagui, createFont } from 'tamagui'
import { tokens } from './theme/tokens';

const customConfig = {
    ...config,
}


const tamaguiConfig = createTamagui({
    ...customConfig,
   tokens,
});

type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;