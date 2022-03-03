import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Text } from 'react-native';

import RainbowButton from '../../components/buttons/RainbowButton';
import PasswordInput from '../../components/common/PasswordInput';
import { isValidPassword } from '../../constants/general';
import SeedPhrase from '../../components/common/SeedPhrase';
import Column from '../../components/layout/Column';
import Header from '../../components/common/Header';
import { unlock } from '../../redux/slices/keyring';
import Copy from '../../components/common/Copy';
import Modal from '../../components/modal';
import styles from './styles';

const RevealSeedPhrase = ({ modalRef }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { instance } = useSelector(state => state.keyring);

  const clearState = () => {
    setPassword('');
    setError(false);
    setLoggedIn(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    dispatch(
      unlock({
        password,
        onError: () => {
          setError(true);
          setLoading(false);
        },
        onSuccess: () => {
          clearState();
          setLoggedIn(true);
          setLoading(false);
        },
      }),
    );
  };

  return (
    <>
      <Modal modalRef={modalRef} onClose={clearState} adjustToContentHeight>
        <Header center={<Text style={styles.title}>Seed Phrase</Text>} />
        <Column style={styles.container}>
          {!loggedIn ? (
            <>
              <PasswordInput
                error={error}
                password={password}
                onChange={setPassword}
              />
              <RainbowButton
                buttonStyle={styles.buttonStyle}
                text="Continue"
                loading={loading}
                onPress={handleSubmit}
                disabled={isValidPassword(password)}
              />
            </>
          ) : (
            <>
              <SeedPhrase
                mnemonic={instance?.state?.mnemonic.split(' ') || []}
              />
              <Copy
                text={instance?.state?.mnemonic}
                customStyle={styles.copyStyle}
              />
            </>
          )}
        </Column>
      </Modal>
    </>
  );
};

export default RevealSeedPhrase;
