/** @jsxImportSource theme-ui */
import {Flex} from 'theme-ui'

export default function FlexBase({ children, sx, ...props }) {
    return (
        <Flex sx={{ color: "text", ...sx }} {...props}>
            {children}
        </Flex>
    );
}
