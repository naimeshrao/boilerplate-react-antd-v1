// /**
//  * THEME USAGE GUIDE FOR STYLED-COMPONENTS
//  *
//  * This file shows how to properly use the theme system in styled-components
//  * throughout the application.
//  */

// import styled from 'styled-components'
// import { ThemeSchema } from './types'

// /**
//  * Example 1: Basic component with theme colors
//  */
// export const Card = styled.div`
//   background-color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.neutral};
//   color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.gray};
//   padding: ${(props: { theme: ThemeSchema }) =>
//     props.theme.spacing.md};
//   border-radius: ${(props: { theme: ThemeSchema }) =>
//     props.theme.borderRadius.md};
//   box-shadow: ${(props: { theme: ThemeSchema }) =>
//     props.theme.shadows.md};
//   transition: all
//     ${(props: { theme: ThemeSchema }) =>
//       props.theme.transitions.normal};

//   &:hover {
//     box-shadow: ${(props: { theme: ThemeSchema }) =>
//       props.theme.shadows.lg};
//   }
// `

// /**
//  * Example 2: Component with theme-based responsive design
//  */
// export const Header = styled.header`
//   background-color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.primary};
//   color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.white};
//   padding: ${(props: { theme: ThemeSchema }) =>
//     props.theme.spacing.lg};

//   @media (max-width: 768px) {
//     padding: ${(props: { theme: ThemeSchema }) =>
//       props.theme.spacing.md};
//   }
// `

// /**
//  * Example 3: Component with conditional theme styling
//  */
// export const Alert = styled.div<{ severity?: 'success' | 'error' | 'warning' }>`
//   padding: ${(props: { theme: ThemeSchema }) =>
//     props.theme.spacing.md};
//   border-radius: ${(props: { theme: ThemeSchema }) =>
//     props.theme.borderRadius.md};
//   transition: all
//     ${(props: { theme: ThemeSchema }) => props.theme.transitions.fast};

//   ${(props: { theme: ThemeSchema; severity?: string }) => {
//     const theme = props.theme

//     switch (props.severity) {
//       case 'success':
//         return `
//           background-color: rgba(52, 211, 153, 0.1);
//           color: rgb(16, 185, 129);
//           border-left: 4px solid rgb(16, 185, 129);
//         `
//       case 'error':
//         return `
//           background-color: rgba(239, 68, 68, 0.1);
//           color: rgb(239, 68, 68);
//           border-left: 4px solid rgb(239, 68, 68);
//         `
//       case 'warning':
//         return `
//           background-color: rgba(251, 146, 60, 0.1);
//           color: rgb(251, 146, 60);
//           border-left: 4px solid rgb(251, 146, 60);
//         `
//       default:
//         return `
//           background-color: ${theme.colors.neutral};
//           color: ${theme.colors.gray};
//           border-left: 4px solid ${theme.colors.primary};
//         `
//     }
//   }}
// `

// /**
//  * Example 4: Using RGB values for transparency
//  */
// export const Badge = styled.span`
//   background-color: rgba(
//     ${(props: { theme: ThemeSchema }) =>
//       props.theme.colors.primaryRgb},
//     0.2
//   );
//   color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.primary};
//   padding: ${(props: { theme: ThemeSchema }) =>
//     `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
//   border-radius: ${(props: { theme: ThemeSchema }) =>
//     props.theme.borderRadius.sm};
//   font-size: 12px;
//   font-weight: 600;
//   white-space: nowrap;
// `

// /**
//  * Example 5: Complex component with mixin pattern
//  */
// const flexCenter = `
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// export const Button = styled.button`
//   ${flexCenter}
//   padding: ${(props: { theme: ThemeSchema }) =>
//     `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
//   background-color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.primary};
//   color: ${(props: { theme: ThemeSchema }) =>
//     props.theme.colors.white};
//   border: none;
//   border-radius: ${(props: { theme: ThemeSchema }) =>
//     props.theme.borderRadius.md};
//   cursor: pointer;
//   transition: all
//     ${(props: { theme: ThemeSchema }) => props.theme.transitions.fast};
//   box-shadow: ${(props: { theme: ThemeSchema }) =>
//     props.theme.shadows.sm};

//   &:hover {
//     box-shadow: ${(props: { theme: ThemeSchema }) =>
//       props.theme.shadows.md};
//     transform: translateY(-2px);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: ${(props: { theme: ThemeSchema }) =>
//       props.theme.shadows.sm};
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//     transform: none;
//   }
// `

// // =============================================================================
// // THEME STRUCTURE REFERENCE
// // =============================================================================
// /*

// The theme object provided to styled-components has this structure:

// {
//   mode: 'light' | 'dark',
//   colors: {
//     primary: 'rgb(...)',           // Primary color
//     primaryRgb: '...',             // Primary color as RGB (for transparency)
//     neutral: 'rgb(...)',           // Neutral/background color
//     neutralRgb: '...',
//     gray: 'rgb(...)',              // Text color
//     grayRgb: '...',
//     white: 'rgb(...)',
//     whiteRgb: '...',
//     black: 'rgb(...)',
//     blackRgb: '...'
//   },
//   spacing: {
//     xs: '4px',
//     sm: '8px',
//     md: '16px',
//     lg: '24px',
//     xl: '32px'
//   },
//   borderRadius: {
//     sm: '4px',
//     md: '6px',
//     lg: '8px'
//   },
//   shadows: {
//     sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
//     md: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     lg: '0 10px 15px rgba(0, 0, 0, 0.2)'
//   },
//   transitions: {
//     fast: '150ms ease-in-out',
//     normal: '300ms ease-in-out',
//     slow: '500ms ease-in-out'
//   }
// }

// // =============================================================================
// // USAGE PATTERNS
// // =============================================================================

// 1. ACCESSING THEME IN STYLED COMPONENTS:

//    const MyComponent = styled.div`
//      color: ${(props: { theme: ThemeSchema }) => props.theme.colors.gray};
//    `

// 2. USING THEME WITH CSS UTILITIES:

//    - Colors: theme.colors.primary, theme.colors.neutral, etc.
//    - Spacing: theme.spacing.md, theme.spacing.lg, etc.
//    - Border Radius: theme.borderRadius.md, theme.borderRadius.lg, etc.
//    - Shadows: theme.shadows.md, theme.shadows.lg, etc.
//    - Transitions: theme.transitions.normal, theme.transitions.slow, etc.

// 3. RGBA TRANSPARENCY WITH RGB VALUES:

//    background-color: rgba(${props.theme.colors.primaryRgb}, 0.1);

// 4. CONDITIONAL STYLING BASED ON THEME MODE:

//    const ThemedBox = styled.div`
//      background: ${(props: { theme: ThemeSchema }) =>
//        props.theme.mode === 'dark' ? '#1a1a1a' : '#ffffff'};
//    `

// 5. USING IN MIXINS:

//    const flexCenter = (theme: ThemeSchema) => `
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      gap: ${theme.spacing.md};
//    `

// // =============================================================================
// // BENEFITS OF THIS APPROACH
// // =============================================================================

// ✅ Single source of truth for styling
// ✅ Consistent spacing, colors, and typography
// ✅ Easy dark/light theme switching
// ✅ Type-safe with TypeScript
// ✅ Automatic theme updates across all components
// ✅ No CSS variables needed (but can use alongside)
// ✅ Better performance and maintainability

// */
