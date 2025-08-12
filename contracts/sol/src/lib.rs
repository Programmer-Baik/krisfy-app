use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana Program!");

    let accounts_iter = &mut accounts.iter();
    let target_account = next_account_info(accounts_iter)?;

    if target_account.owner != program_id {
        msg!("Accounts does not belong to this program");
        return Err(solana_program::program_error::ProgramError::IncorrectProgramId);
    }

    let mut data = target_account.data.borrow_mut();
    let current_value: u64 = if data.len() >= 8 {
        u64::from_le_bytes(data[0..8].try_into().unwrap())
    } else {
        0
    };
    let new_value = current_value.checked_add(1).unwrap_or(current_value);
    data[0..8].copy_from_slice(&new_value.to_le_bytes());

    msg!("Counter Incremented to : {}", new_value);

    Ok(())
}
