import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';
import ProfileIdentity from '../components/ProfileIdentity';
import AddLinksSection from '../components/AddLinksSection';
import LinkCard, { LinkData } from '../components/LinkCard';
import ViewPageButton from '../components/ViewPageButton';

interface LinksModeScreenProps {
  onModePress?: () => void;
}

export default function LinksModeScreen({ onModePress }: LinksModeScreenProps) {
  const [links, setLinks] = useState<LinkData[]>([
    {
      id: '1',
      type: 'website',
      title: 'Website',
      value: 'www.starcrestcreative.com',
    },
    {
      id: '2',
      type: 'email',
      title: 'Email',
      value: 'meredith@starcrestcreative.com',
    },
    {
      id: '3',
      type: 'linkedin',
      title: 'My LinkedIn',
      value: 'https://www.linkedin.com/company/star...',
    },
  ]);

  const handleAddLink = (type: 'link' | 'phone' | 'email' | 'whatsapp') => {
    console.log('Add link of type:', type);
    // TODO: Open modal or navigate to add link screen
  };

  const handleLinkPress = (link: LinkData) => {
    console.log('Link pressed:', link);
    // TODO: Open link in browser or appropriate app
  };

  const handleLinkMenuPress = (link: LinkData) => {
    console.log('Link menu pressed:', link);
    // TODO: Show action sheet with options: Edit, Delete, Reorder
  };

  const handleSharePress = () => {
    console.log('Share pressed');
    // TODO: Open native share sheet
  };

  const handleViewPagePress = () => {
    console.log('View Page pressed');
    // TODO: Open preview or public profile view
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Header */}
        <Header onSharePress={handleSharePress} onLinksPress={onModePress} />

        {/* Scrollable Content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Identity */}
          <ProfileIdentity
            name="Meredith Martin"
            bio="I enjoy chatting with leaders ready to strengthen their visual storytelling and explore strategic design witho..."
            profileImageUri={require('../assets/clnk.png')}
          />

          {/* Add Links Section */}
          <AddLinksSection onAddLink={handleAddLink} />

          {/* Link Cards */}
          <View style={styles.linksContainer}>
            {links.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                onPress={handleLinkPress}
                onMenuPress={handleLinkMenuPress}
              />
            ))}
          </View>

          {/* Bottom spacing for sticky button */}
          <View style={styles.bottomSpacer} />
        </ScrollView>

        {/* Sticky Bottom Button */}
        <SafeAreaView edges={['bottom']} style={styles.bottomContainer}>
          <ViewPageButton onPress={handleViewPagePress} />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  linksContainer: {
    paddingTop: 8,
  },
  bottomSpacer: {
    height: 80,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
  },
});
