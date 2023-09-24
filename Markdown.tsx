import React, { ReactNode, Fragment } from "react"
import { Text, ScrollView } from "react-native"
import type { TextStyle } from "react-native"
import { Renderer, useMarkdown } from "react-native-marked"
import type { RendererInterface } from "react-native-marked"
import { Heading, Paragraph, Stack } from "tamagui"

class CustomRenderer extends Renderer implements RendererInterface {
  constructor() {
    super()
  }

  heading(
    text: string | ReactNode[],
    styles?: TextStyle,
    depth?: number
  ): ReactNode {
    return (
      <Heading key={this.getKey()} style={styles}>
        {text}
      </Heading>
    )
  }

  text(text: string | ReactNode[], styles?: TextStyle): ReactNode {
    return (
      <Paragraph key={this.getKey()} style={styles}>
        {text}
      </Paragraph>
    )
  }

  codespan(text: string, _styles?: TextStyle): ReactNode {
    return (
      <Text key={this.getKey()} style={{ backgroundColor: "#ff0000" }}>
        {text}
      </Text>
    )
  }
}

const renderer = new CustomRenderer()

const Markdown = () => {
  const elements = useMarkdown("## Heading2", { renderer })

  return (
    <Stack borderWidth="$1" borderColor="red">
      {elements.map((element, index) => {
        console.log(element)

        return <Fragment key={`demo_${index}`}>{element}</Fragment>
      })}
    </Stack>
  )
}

export default Markdown
