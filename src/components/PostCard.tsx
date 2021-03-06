import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FeatureImage } from "./FeatureImage"
import { PostMetaInfo } from "./PostMetaInfo"

const Card = styled.article`
  display: grid;
  grid-auto-rows: 1fr;
  box-shadow: var(--light-shadow);
  background: #fff;
  border-radius: 15px;
  line-height: 1.5;
  color: #222;
  position: relative;
  width: 320px;

  header {
    justify-content: center;
    padding: 2px 22px 10px 22px;
  }

  .post-title {
    text-align: center;
    color: #4c4c4c;
    letter-spacing: 1.7px;
    font-size: 2rem;
  }

  .post-description {
    font-size: 1.4rem;
    text-align: justify;
    color: var(--paragraph-color);
  }
`

export function PostCard({ title, date, slug, excerpt, image, readTime }: any) {
  return (
    <Card>
      <Link to={slug}>
        <FeatureImage image={image} styles={{ height: "250px" }} />
      </Link>
      <header>
        <Link to={slug}>
          <h2 className="post-title">{title}</h2>
        </Link>
        <p className="post-description">{excerpt}</p>
        <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
      </header>
    </Card>
  )
}
