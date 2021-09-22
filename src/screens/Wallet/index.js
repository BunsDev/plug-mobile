import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import AccountInfo from '../../components/common/AccountInfo';
import BottomTabs from '../../components/common/BottomTabs';
import Container from '../../components/common/Container';
import UserIcon from '../../components/common/UserIcon';
import Divider from '../../components/common/Divider';
import Header from '../../components/common/Header';
import Icon from '../../components/icons';
import { FontStyles } from '../../constants/theme';

import Tokens from './tabs/Tokens';
import NFTs from './tabs/NFTs';

const TABS = selected => [
  {
    icon: <Icon name="tokens" color={selected === 0 ? 'white' : 'gray'} />,
    name: 'Tokens',
  },
  {
    icon: <Icon name="nfts" color={selected === 1 ? 'white' : 'gray'} />,
    name: 'NFTs',
  },
];

const header = {
  left: <UserIcon size="small" icon="🔥" />,
  center: <AccountInfo />,
  right: <Text>😆</Text>,
};

function Wallet() {
  const [selectedTab, setSelectedTab] = useState(0);

  const onSelect = value => setSelectedTab(value);

  const tabs = TABS(selectedTab);

  return (
    <Container>
      <Header {...header} />
      <Text style={styles.title}>{tabs[selectedTab].name}</Text>
      <Divider />
      {
        // maybe add transition animation between tabs
        selectedTab === 0 && <Tokens />
      }
      {selectedTab === 1 && <NFTs />}

      <BottomTabs tabs={tabs} selected={selectedTab} onSelect={onSelect} />
    </Container>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    paddingBottom: 20,
    ...FontStyles.Title,
  },
});
