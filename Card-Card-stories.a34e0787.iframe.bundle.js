"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[908],{"./components/uikit/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Card=({onClick,isPromoted,isSubmitDisabled,isAvailable=!0,cachedImage,imageClassName,bodyContent,footerContent,size="medium",direction="vertical",className})=>(0,jsx_runtime.jsx)("article",{onClick,className:classnames_default()("flex flex-col w-full h-full",{"rounded-[8px] max-md:p-4 max-md:z-1":isPromoted},{"cursor-pointer group/card":!isSubmitDisabled},{"max-h-[420px] md:min-h-[367px]":"medium"===size},{"max-w-[420px] md:max-w-[320px]":"large"===size},{"max-w-[620px] md:max-w-[620px]":"large"===size&&"horizontal"===direction},{"max-md:max-w-[282px]":"small"===size&&"horizontal"===direction}),children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("flex-1 flex md:flex-col items-center max-md:flex-row max-md:gap-2.5 max-md:text-left max-md:items-center border-disabled hover:border-primary border-[1.5px] rounded-[8px] overflow-hidden",{"hover:border-disabled":isSubmitDisabled},{"!flex-row":"horizontal"===direction},{"max-md:border-0":"large"===size},className),children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("flex justify-center relative h-auto w-full aspect-square mx-auto",{"opacity-50":!isAvailable},{"max-h-[150px] md:max-h-[150px] max-w-[150px] md:max-w-[150px] max-md:max-w-[100px]":"small"===size&&"horizontal"===direction},{"max-h-[200px] md:max-h-[200px]":"small"===size},{"md:max-h-[238px] max-md:max-h-[177px]":"medium"===size},imageClassName,{"max-md:max-w-[120px] max-w-[320px] max-md:rounded-[8px] max-md:!overflow-hidden":"large"===size}),children:cachedImage}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("flex-1 w-full flex flex-col md:justify-between max-md:justify-center md:p-[24px] max-md:p-[16px] md:gap-[24px] max-md:gap-[16px] items-stretch h-full",{"max-md:!gap-2":"small"===size&&"horizontal"===direction},{"max-md:!gap-[12px] max-md:p-[8px]":"large"===size}),children:[(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-2",children:bodyContent}),(0,jsx_runtime.jsx)("footer",{children:footerContent})]})]})}),uikit_Card=Card;Card.__docgenInfo={description:"TODO: отрефакторить карточку и согласовать все комбинации",methods:[],displayName:"Card",props:{isPromoted:{required:!1,tsType:{name:"boolean"},description:""},isSubmitDisabled:{required:!1,tsType:{name:"boolean"},description:""},isAvailable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},headerContent:{required:!1,tsType:{name:"ReactNode"},description:""},cachedImage:{required:!1,tsType:{name:"ReactNode"},description:""},imageClassName:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},bodyContent:{required:!1,tsType:{name:"ReactNode"},description:""},footerContent:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};var uikit=__webpack_require__("./components/uikit/index.js"),icons=__webpack_require__("./components/uikit/icons/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Card_stories={title:"UI-Kit/Card",children:"",component:uikit_Card,parameters:{layout:"centered"},argTypes:{isAvailable:{control:"boolean"}},args:{size:"medium",direction:"vertical",onClick:(0,dist.fn)(),isPromoted:!1,isSubmitDisabled:!1,isAvailable:!0,headerContent:void 0,cachedImage:void 0,bodyContent:void 0,footerContent:void 0}},Large={render:props=>{const{onClick,isPromoted,isSubmitDisabled,headerContent,isAvailable,cachedImage,bodyContent,footerContent,size,direction,className}=props;return(0,jsx_runtime.jsx)(uikit_Card,{onClick,isPromoted,isSubmitDisabled,headerContent,isAvailable,cachedImage,bodyContent,footerContent,size,direction,className})},args:{onClick:(0,dist.fn)(),isPromoted:!1,isSubmitDisabled:!1,isAvailable:!0,headerContent:(0,jsx_runtime.jsx)(next_image.A,{src:"https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/1378389/Nigiri-s-lososem.webp",alt:"alt",title:"title",width:16,height:16},"key"),cachedImage:(0,jsx_runtime.jsx)(next_image.A,{src:"https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/1378389/Nigiri-s-lososem.webp",alt:"name",width:300,height:300,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}),bodyContent:(0,jsx_runtime.jsx)(uikit.EY,{variant:"caption-4",className:"group-hover/card:text-primary",children:"Some body content"}),footerContent:(0,jsx_runtime.jsxs)("div",{className:"flex-1 flex justify-start items-center gap-4",children:[(0,jsx_runtime.jsx)(uikit.$n,{size:"small",children:"Выбрать"}),(0,jsx_runtime.jsx)(uikit.$n,{variant:"text",color:"secondary",adornment:(0,jsx_runtime.jsx)(icons.dd,{className:"md:w-6 md:h-6"}),onClick:()=>{},className:"!p-0",children:"Подробнее"})]}),size:"large",direction:"vertical"}},__namedExportsOrder=["Large"];Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  render: props => {\n    const {\n      onClick,\n      isPromoted,\n      isSubmitDisabled,\n      headerContent,\n      isAvailable,\n      cachedImage,\n      bodyContent,\n      footerContent,\n      size,\n      direction,\n      className\n    } = props;\n    return <Card onClick={onClick} isPromoted={isPromoted} isSubmitDisabled={isSubmitDisabled} headerContent={headerContent} isAvailable={isAvailable} cachedImage={cachedImage} bodyContent={bodyContent} footerContent={footerContent} size={size} direction={direction} className={className} />;\n  },\n  args: {\n    onClick: fn(),\n    isPromoted: false,\n    isSubmitDisabled: false,\n    isAvailable: true,\n    headerContent: <Image key={\'key\'} src={\'https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/1378389/Nigiri-s-lososem.webp\'} alt={\'alt\'} title={\'title\'} width={16} height={16} />,\n    cachedImage: <Image src={\'https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/1378389/Nigiri-s-lososem.webp\'} alt={\'name\'} width={300} height={300} sizes="(max-width: 768px) 100vw,\n          (max-width: 1200px) 50vw,\n          33vw" />,\n    bodyContent: <Text variant="caption-4" className="group-hover/card:text-primary">\n        Some body content\n      </Text>,\n    footerContent: <div className="flex-1 flex justify-start items-center gap-4">\n        <Button size="small">Выбрать</Button>\n        <Button variant="text" color="secondary" adornment={<SquaredPlusIcon className="md:w-6 md:h-6" />} onClick={() => {}} className="!p-0">\n          Подробнее\n        </Button>\n      </div>,\n    size: \'large\',\n    direction: \'vertical\'\n  }\n}',...Large.parameters?.docs?.source}}}}}]);