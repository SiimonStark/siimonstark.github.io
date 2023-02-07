import React from 'react';

const Primary = ({ project, screenshotIndex, changeScreenshot, renderToolIcons }) => {
  const { name, description, screenshots, github, liveSite, tools } = project;
  const imgBG = {
    backgroundImage: `url(${screenshots[screenshotIndex]})`
  }

  return (
    <section className="Primary">
      <section className="image" style={imgBG}>
        {screenshotIndex > 0 && (
          <button
            className="left fas fa-caret-square-left"
            onClick={() => changeScreenshot(screenshotIndex, 0)}
          />
        )}
        {screenshotIndex < screenshots.length - 1 && (
          <button
            className="right fas fa-caret-square-right"
            onClick={() => changeScreenshot(screenshotIndex, 1)}
          />
        )}
      </section>
      <section className="descript">
        <article className="descript_body">
          <h3 className="title">{name}</h3>
          <p>{description}</p>
          <div className="descript_links">
            {liveSite && (
              <a href={liveSite} target="blank">
                Live Site
              </a>
            )}
            <a href={github} target="blank">
              Github
            </a>
          </div>
        </article>
        <div className="tool_icons">{renderToolIcons()}</div>
      </section>
    </section>
  );
}

export default Primary;