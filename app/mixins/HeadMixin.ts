import Vue from "vue";
import Component from "vue-class-component";
import { MetaInfo } from "vue-meta";
import { HeadInfo } from "~/types";

@Component
export default class HeadMixin extends Vue {
  public headInfo(): HeadInfo {
    return {};
  }

  public head(): MetaInfo {
    const i18nSeo = this.$nuxtI18nSeo();
    const t = this.$t.bind(this);
    const info = this.headInfo();

    const siteName: string = t("site_name") as string;
    const title: string = t(info.title || "site_name") as string;
    const description: string = t(info.description || "site_description") as string;

    const baseUrl: string = process.env.baseUrl || "";
    const thisUrl: string = `${baseUrl}${this.$route.path}`;

    const ogImageUrl: string = `${baseUrl}${info.ogImagePath || "/ogp.png"}`;
    return {
      title: title,
      htmlAttrs: {
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb#",
        ...i18nSeo.htmlAttrs
      },
      meta: [
        { hid: "description", name: "description", content: description },
        { name: "application-name", content: siteName },

        // OGP / Social Meta Tag
        { property: "og:type", name: "og:type", content: "website" },
        { property: "og:title", name: "og:title", content: title },
        {
          property: "og:description",
          name: "og:description",
          content: description
        },
        { property: "og:url", name: "og:url", content: thisUrl },
        { property: "og:image", name: "og:image", content: ogImageUrl },
        { property: "og:site_name", name: "og:site_name", content: siteName },
        ...i18nSeo.meta
      ],
      link: [{ rel: "canonical", href: thisUrl }, ...i18nSeo.link]
    };
  }
}
