
// third-party
import { merge } from 'lodash'

// project import
import Typography from './Typography'
import Button from './Button'



export default function ComponentsOverrides(theme) {
  return merge(
    Button(theme),
    Typography(),
  );
}