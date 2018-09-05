import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
	ContentBox,
	LocationBox,
	ReferenceList,
} from './app/components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

const ClassScreen = () => (
	<View style={{ flex: 1 }}>
		<View
			style={{
				flex: 1,
				marginTop: 5,
				marginLeft: 10,
				marginRight: 10,
			}}
		>
			<ContentBox
				title={example.title}
				subtitle={example.subtitle}
				speakers={example.speakers}
				content={example.content}
			/>
			<ReferenceList references={example.references} />
		</View>
		<LocationBox
			location={example.location}
			complement={example.complement}
			latitude={example.latitude}
			longitude={example.longitude}
			mapsUrl={example.mapsUrl}
			startAt={example.startAt}
			endAt={example.endAt}
		/>
	</View>
);

const App = () => (
	<ScrollView>
		<View style={styles.container}>
			<ClassScreen />
		</View>
	</ScrollView>
);

export default App;
