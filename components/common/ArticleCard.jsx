
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { articles } from '../../dummy-data/index.js';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function ArticleCard() {

    return (
        <Card>   
            <Card.Content>
                <Text variant="titleLarge">Headline</Text>
                <Text variant="bodyMedium">First few lines of the article Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestiae vero perspiciatis rem dicta quia dolor...</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>

    );

};