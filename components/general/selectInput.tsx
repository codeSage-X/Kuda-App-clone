import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TagsInput = ({ selectedTags }:any) => {
  const [tags, setTags] = useState<any>([]);
  const [tagText, setTagText] = useState('');

  const removeTag = (indexToRemove:any) => {
    const newTags = tags.filter((_: any, index: any) => index !== indexToRemove);
    setTags(newTags);
    selectedTags(newTags);
  };

  const addTag = () => {
    if (tagText.trim() !== '') {
      const newTags = [...tags, tagText.trim()];
      setTags(newTags);
      setTagText('');
      selectedTags(newTags);
    }
  };

  return (
    <View style={styles.tagsInput}>
      <View style={styles.tagsList}>
        {tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <TouchableOpacity key={index} onPress={() => removeTag(index)} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <Text style={styles.tagCloseIcon}>x</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        value={tagText}
        onChangeText={setTagText}
        onSubmitEditing={addTag}
        placeholder="Press enter to add tags"
      />
    </View>
  );
};

export default TagsInput;


const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  tagsInput: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    minHeight: 48,
    width: '90%',
    borderWidth: 1,
    borderColor: '#d6d8da',
    borderRadius: 6,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    margin: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0052cc',
    borderRadius: 6,
    padding: 4,
    margin: 4,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 4,
  },
  tagCloseIcon: {
    color: '#0052cc',
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 46,
    fontSize: 14,
    padding: 4,
  },
});

// export default App;


