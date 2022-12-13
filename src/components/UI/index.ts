import Button from '@/components/UI/Button.vue';
import Text from '@/components/UI/Text.vue';
import Link from '@/components/UI/Link.vue';
import Header from '@/components/UI/Header.vue';
import Card from '@/components/UI/Card.vue';
import { Row, Column } from 'vue-grid-responsive';
Row.name = 'ui-row';
Column.name = 'ui-column';
export default [Link, Button, Text, Header, Card, Row, Column];
