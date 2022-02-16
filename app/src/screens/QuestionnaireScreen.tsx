import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import {survey} from '../questions.json';

{/* <SimpleSurvey
    survey={survey}
    containerStyle={styles.surveyContainer}
    selectionGroupContainerStyle={styles.selectionGroupContainer}
    navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
    renderPrevious={this.renderPreviousButton.bind(this)}
    renderNext={this.renderNextButton.bind(this)}
    renderFinished={this.renderFinishedButton.bind(this)}
    renderQuestionText={this.renderQuestionText}
    renderSelector={this.renderButton.bind(this)}
    onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
    onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
    renderTextInput={this.renderTextBox}
    renderNumericInput={this.renderNumericInput}
    renderInfo={this.renderInfoText}
/>

 */}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });