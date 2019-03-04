var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
export function Article({ publishedAt, image, header, children }) {
  const publishedDateTime = new Date(publishedAt);
  const publishedDate = publishedDateTime.toLocaleDateString("en-US", options);
  const publishedTime = publishedDateTime.toLocaleTimeString("en-US");

  return (
    <article class="article">
      {false && publishedDateTime && (
        <time
          datetime={`${publishedDate} ${publishedTime}`}
          class="article__published-datetime"
        >
          {publishedDate} {publishedTime}
        </time>
      )}
      {header && <header>{header}</header>}
      {image && <img src={image} class="article__image" />}
      <section class="article__body">{children && children}</section>
    </article>
  );
}
