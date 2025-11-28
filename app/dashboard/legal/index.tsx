import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    terms: false,
    policies: false,
    disclaimer: false,
    faqs: false,
  });

  const handleNavigation = () => {
    router.back()
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const openURL = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  const countries = [
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'United Kingdom', flag: '🇬🇧' },
  ];

  const getCountryCode = () => {
    return selectedCountry === 'Nigeria' ? 'ng' : 'gb';
  };

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        {/* Header */}
        <Box
          height={60}
          paddingTop={'lg'}
          borderBottomWidth={0.2}
          style={{ borderColor: '#a1a1a1', marginTop: 20 }}
          width={'100%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            width={'100%'}
            height={50}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'}
          >
            <Box flexDirection={'row'} width={'10%'} padding={'md'} justifyContent={'flex-end'}>
              <Pressable onPress={() => handleNavigation()}>
                <Ionicons name="chevron-back" size={20} color="white" />
              </Pressable>
            </Box>
            <Box width={'60%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                Legal
              </CustomText>
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'} style={{ marginTop: 20 }}>
            {/* Country Selector */}
            <Pressable onPress={() => setShowCountryDropdown(!showCountryDropdown)}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#2a2a2a',
                  padding: 16,
                  marginBottom: 10,
                }}
              >
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Box
                    width={36}
                    height={36}
                    style={{ borderRadius: 18, marginRight: 12 }}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <CustomText fontSize={24}>
                      {countries.find((c) => c.name === selectedCountry)?.flag}
                    </CustomText>
                  </Box>
                  <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                    {selectedCountry}
                  </CustomText>
                </Box>
                <Ionicons
                  name={showCountryDropdown ? 'chevron-up' : 'chevron-down'}
                  size={22}
                  color="#8a8a8a"
                />
              </Box>
            </Pressable>

            {/* Country Dropdown */}
            {showCountryDropdown && (
              <Box style={{ marginBottom: 10 }}>
                {countries
                  .filter((country) => country.name !== selectedCountry)
                  .map((country) => (
                    <Pressable
                      key={country.name}
                      onPress={() => {
                        setSelectedCountry(country.name);
                        setShowCountryDropdown(false);
                      }}
                    >
                      <Box
                        flexDirection={'row'}
                        alignItems={'center'}
                        style={{
                          backgroundColor: '#0a0a0a',
                          padding: 16,
                          borderRadius: 8,
                        }}
                      >
                        <Box
                          width={36}
                          height={36}
                          style={{ borderRadius: 18, marginRight: 12 }}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <CustomText fontSize={24}>{country.flag}</CustomText>
                        </Box>
                        <CustomText variant={'body'} fontSize={16} color={'white'}>
                          {country.name}
                        </CustomText>
                      </Box>
                    </Pressable>
                  ))}
              </Box>
            )}

            {/* Terms & Conditions */}
            <Pressable onPress={() => toggleSection('terms')}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#2a2a2a',
                  padding: 18,
                  marginBottom: 10,
                }}
              >
                <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                  Terms & Conditions
                </CustomText>
                <Ionicons
                  name={expandedSections.terms ? 'chevron-down' : 'chevron-forward-sharp'}
                  size={22}
                  color="#8a8a8a"
                />
              </Box>
            </Pressable>

            {expandedSections.terms && (
              <Box style={{ marginBottom: 10, paddingLeft: 10 }}>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/terms/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Retail
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/business-terms/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Business
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/card-terms/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Cards
                    </CustomText>
                  </Box>
                </Pressable>
              </Box>
            )}

            {/* Policies */}
            <Pressable onPress={() => toggleSection('policies')}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#2a2a2a',
                  padding: 18,
                  marginBottom: 10,
                }}
              >
                <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                  Policies
                </CustomText>
                <Ionicons
                  name={expandedSections.policies ? 'chevron-down' : 'chevron-forward-sharp'}
                  size={22}
                  color="#8a8a8a"
                />
              </Box>
            </Pressable>

            {expandedSections.policies && (
              <Box style={{ marginBottom: 10, paddingLeft: 10 }}>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/privacy-policy/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Privacy Policy
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/information-security-policy/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Information Security Policy
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/cookie-policy/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Cookie Policy
                    </CustomText>
                  </Box>
                </Pressable>
              </Box>
            )}

            {/* Disclaimer */}
            <Pressable onPress={() => toggleSection('disclaimer')}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#2a2a2a',
                  padding: 18,
                  marginBottom: 10,
                }}
              >
                <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                  Disclaimer
                </CustomText>
                <Ionicons
                  name={expandedSections.disclaimer ? 'chevron-down' : 'chevron-forward-sharp'}
                  size={22}
                  color="#8a8a8a"
                />
              </Box>
            </Pressable>

            {expandedSections.disclaimer && (
              <Box style={{ marginBottom: 10, paddingLeft: 10 }}>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/investment-disclaimer/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Investments
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/legal/gift-card-disclaimer/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Giftcards
                    </CustomText>
                  </Box>
                </Pressable>
              </Box>
            )}

            {/* FAQs */}
            <Pressable onPress={() => toggleSection('faqs')}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#2a2a2a',
                  padding: 18,
                  marginBottom: 10,
                }}
              >
                <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                  FAQs
                </CustomText>
                <Ionicons
                  name={expandedSections.faqs ? 'chevron-down' : 'chevron-forward-sharp'}
                  size={22}
                  color="#8a8a8a"
                />
              </Box>
            </Pressable>

            {expandedSections.faqs && (
              <Box style={{ marginBottom: 10, paddingLeft: 10 }}>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/help/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      FAQs
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/help/open-api/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Open Api FAQs
                    </CustomText>
                  </Box>
                </Pressable>
                <Pressable onPress={() => openURL(`https://kuda.com/en-${getCountryCode()}/help/business/`)}>
                  <Box style={{ paddingVertical: 14 }}>
                    <CustomText variant={'body'} fontSize={15} color={'white'}>
                      Kuda for Business FAQs
                    </CustomText>
                  </Box>
                </Pressable>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 40, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}