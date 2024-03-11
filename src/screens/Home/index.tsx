import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styled';
import { SearchLabel } from '@components/SearchLabel';
import { ResultLabel } from '@components/ResultLabel';

export function Home() {
  return (
    <Container>
      <StatusBar style="auto" />
      <SearchLabel />
      <ResultLabel />
    </Container>
  );
}
