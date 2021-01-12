import React, { useState, useEffect } from 'react';

import ImageHelper from '../ImageHelper';
import {
  Card,
  CardType,
  CardGeneric,
  CardBottom,
  Span,
  SpanText,
  Dot,
  CardTop,
  Header3,
  Header4,
  ImgContainer,
  Notify,
} from './styles';

type Props = {
  id: number;
  company: string;
  logo: string;
  news: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  onclick(item: string): void;
};

const Job = ({
  id,
  company,
  logo,
  news,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onclick,
}: Props) => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 1000);
  }, []);
  return (
    <Card key={id} featured={featured} animated={animated}>
      <CardType>
        <ImgContainer>
          <ImageHelper company={company} />
        </ImgContainer>

        <CardTop>
          <Header4>{company}</Header4>
          {news ? <Notify featured={false}>NEW!</Notify> : ''}
          {featured ? <Notify featured={featured}>FEATURED</Notify> : ''}
          <Header3>{position}</Header3>

          <CardGeneric>
            <Span>{postedAt}</Span>
            <Dot />
            <Span>{contract}</Span>
            <Dot />
            <Span>{location}</Span>
          </CardGeneric>
        </CardTop>
      </CardType>

      <CardBottom>
        <SpanText onClick={() => onclick(role)}>{role}</SpanText>
        <SpanText onClick={() => onclick(level)}>{level}</SpanText>
        {languages.map((language) => (
          <SpanText key={language} onClick={() => onclick(language)}>
            {language}
          </SpanText>
        ))}
        {tools.map((tool) => (
          <SpanText key={tool} onClick={() => onclick(tool)}>
            {tool}
          </SpanText>
        ))}
      </CardBottom>
    </Card>
  );
};

export default Job;
