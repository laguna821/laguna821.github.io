---
layout: post
title: Sentiment Analysis of George Floyd Twets
date: 2020-6-3 18:09:50 +0300
img: gfloyd_wordcloud.jpg
tags: [RStudio, Bing, NRC, wordcloud]
author: Changhyun Ahn
---
2020년 5월 25일, 미국 미네소타에서 George Floyd라는 흑인이 백인 경찰에 의해 사망했다. 이 사건은 Black Lives Matter등 각종 시위의 기폭제가 되어 트위터나 인스타그램 등 각종 소셜 미디어에서는 과잉진압, 인종차별에 대한 시위에 동참하는 글들이 올라오곤 했다. 그런데 이 트윗들을 수집해서 감성분석을 해본다면 어떠한 결과가 나올까? 이 프로젝트에서는 파이썬 Twint 패키지로 관련 트윗들을 수집하고 RStudio로 긍/부정 감성분석과 개별 감정 감성분석의 2가지 감성분석을 실시해보았다.

### 데이터 수집 절차

데이터 수집은 Python Spyder에서 Twint 패키지를 임포트해서 수집하였으며 설정은 다음과 같다.

1. 검색어: George Floyd OR Minneapolis OR Minneapolis Riots OR Floyd OR Derek Chauvin OR #icantbreathe #georgefloyd OR #blcklivesmatter
2. 검색기간: 2020년 5월 25일 - 30일
3. 수집언어: 영어

분석에서 데이터는 불용어를 제거하고 https등의 링크를 제거한 후, 해당 사건의 관련 인물인 George Floyd나 Derek Chauvin의 이름을 제거하였다. 해당 이름을 제거하지 않을 경우 이 단어들의 빈도수가 너무 높아 다른 단어들의 경향성이 가려지는 문제를 해결하기 위함이었다. 대략적인 클리닝 절차는 아래와 같다.
```
library(dplyr)
library(tidytext)
library(ggplot2)

### Data cleaning process ###
## removing any http links #
gfloyd2$clean_text <-gsub("http.*","", gfloyd2$tweet)
gfloyd2$clean_text <-gsub("https.*","", gfloyd2$clean_text)

## removing certain words ###
gfloyd2$clean_text <-gsub("pic.twitter.com","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("george","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("floyd","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("georgefloyd","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("icantbreathe","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("blacklivesmatter","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("chauvin","",gfloyd2$clean_text)
gfloyd2$clean_text <-gsub("derek","",gfloyd2$clean_text)

## removing puncuations, lowercase everything
gfloyd_clean <- gfloyd2 %>%
  dplyr::select(clean_text) %>%
  unnest_tokens(word, clean_text)

## Removing unnessary words ##
# Load stop word dictionary #
data("stop_words")

# Count unique words
nrow(gfloyd_clean)

# Remove all stop words
gfloyd_clean <-gfloyd_clean %>%
  anti_join(stop_words)

# Count all the uniques words again
nrow(gfloyd_clean)


### 1st Analysis Top N Words ###
## plot a graph of top 10 words ##
gfloyd_clean %>%
  count(word, sort = TRUE) %>%
  top_n(20) %>%
  mutate(word = reorder(word, n)) %>%
  ggplot(aes(x = word, y=n)) +
  geom_col() +
  xlab(NULL) +
  coord_flip() +
  labs(y = "Frequency of Words",
       x = "Words",
       title = "Top 20 most used words in tweets",
       subtitle = "Stop words have been removed")

## Remove certain words (then run top10 words again)
gfloyd_clean<-gfloyd_clean[ grep("george", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("floyd", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("blacklivematter", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("chauvin", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("derek", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("blacklivesmatter", gfloyd_clean$word, invert = TRUE),]
gfloyd_clean<-gfloyd_clean[ grep("blacklivesmatters", gfloyd_clean$word, invert = TRUE),]
```


그렇다면 결과는 어떻게 나타났을까?

![top20 words]({{site.baseurl}}/images/pages/gfloyd_top20.jpg)

우선 긍/부정 등과 관계없이 단순 최빈단어들을 보면 police, justice, mineapolis, icantbreathe같은 사건 관련 주요 키워드들이 가장 많이 언급된것을 볼 수 있다.

![top words by postive/negative]({{site.baseurl}}/images/pages/gfloyd_sentiment.jpg)

다음으로 긍/부정별 최빈단어들을 보면, murder, racism, death와 같은 단어들이 부정적인 단어로 가장 많이 언급된 것을 볼 수있다. 긍정 단어들을 보면 흥미로운 것은 trump가 긍정 단어로 언급된 것인데, 해당 데이터는 2020년 5월 25일부터 30일까지의 데이터로, 당시 트위터 여론은 코로나 또는 George Floyd 관련 시위로 트럼프 전 대통령의 지지율이 악화되기 전이었기 때문에 다소 긍정적인 단어로 언급되는 것으로 보인다.

![top words by discrete emotion]({{site.baseurl}}/images/pages/gfloyd_sentiment_NRC.jpg)

그 다음은 개별 감정별 최빈단어들이다. murder, death 두 단어에는 분노, 공포, 슬픔, 놀람의 4가지 종류가 뒤섞인 감정으로 가장 많이 언급된다. 흥미로운 것은 justice, officer의 두 단어는 긍정의 감정과 신뢰의 감정으로 언급이 되는데, 이를 통해 이 데이터의 해당 샘플은 대부분 백인 또는 비흑인 샘플일 것으로 추측된다.

![wordcloud_all]({{site.baseurl}}/images/pages/gfloyd_wordcloud.jpg)

모든 단어들의 워드클라우드. 역시 police, icantbrethe같은 키워드들이 가장 크게 나타난 것을 볼 수 있다.

![wordcloud positive negative]({{site.baseurl}}/images/pages/gfloyd_wordcloud_sentiment.jpg)

긍/부정 워드클라우드. murder, death, racism, killed등이 빨간색의 부정적 단어로 크게 배치된 것을 볼 수 있으며, peace, trump같은 단어들이 긍정적 단어로 표시된 것을 볼 수 있다.

![wordcloud discrete emotion]({{site.baseurl}}/images/pages/gfwcnrc.jpg.jpg)

개별 감정별 워드클라우드. police같은 단어가 공포로 표시되어 있으면서도 officer는 신뢰의 색깔로 표시되어 있다. white가 기쁨의 감정으로 분류되고 death가 놀람의 감정으로 표시된 것을 보면, 종합적으로 이 트위터 샘플은 대체로 트럼프에 대해 중립 내지는 다소 호의적인 백인 샘플이 상당수 일 것이며, 그 샘플들의 트윗들은 대부분 George Floyd 사건 관련해서 제3자 입장에서 '매우 놀랍고 유감스러운 사건이다'라는 식으로 신중하게 입장을 표명하는 경향들을 보이는 것으로 파악된다.

이상으로 본 프로젝트는 George Floyd 사건 관련 트위터로 감성분석을 실시해보았다.
본 프로젝트를 통해 NRC discrete emotion sentiment dictionary가 단순히 감성분석을 실시하는 것에도 한 차원 더 심층적이고 입체적인 분석을 가능하게 해준 다는 것을 알 수 있었다.

아쉬운 점은 NRC Sentiment 사전이 한글버전이 따로 없다는 점인데, 한글 텍스트 자료에도 NRC Sentiment 사전이 사용될수 있는 방안이 연구되기를 기대해본다.
