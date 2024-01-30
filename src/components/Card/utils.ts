import { flow, replace, startCase } from 'lodash/fp';

export const transformText = (text: string) =>
  flow(
    replace(/\[\[(.+?)\]\]/g, `<b><i>$1</i></b>`),
    replace(
      /\[{1}([\w]+?)\]{1}/g,
      (_, icon) =>
        `<span class="icon-${icon}" title="${startCase(icon)}"></span>`,
    ),
  )(text);
